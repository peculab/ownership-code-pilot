import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {githubClient,repository} from './github.mjs';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
try{
 const {api,pages}=await githubClient();const repo=await api('/repos/'+repository);
 if(!repo.private)throw new Error('This collaboration repository must be Private before publishing pilot tasks.');
 const catalog=JSON.parse(readFileSync(join(root,'.github/pilot/tasks.json'),'utf8'));
 const labels=await pages('/repos/'+repository+'/labels'),names=new Set(labels.map(l=>l.name));
 for(const label of catalog.labels)if(!names.has(label.name))await api('/repos/'+repository+'/labels',{method:'POST',body:label});
 const existing=(await pages('/repos/'+repository+'/issues?state=all')).filter(i=>!i.pull_request),records=[];
 for(const task of catalog.tasks){
  const marker=`<!-- pilot-task:${task.key} -->`;let issue=existing.find(i=>i.body?.includes(marker));
  if(!issue){issue=await api('/repos/'+repository+'/issues',{method:'POST',body:{title:task.title,body:marker+'\n\n'+task.body,labels:task.labels}});console.log('Created #'+issue.number+' '+task.title);}
  else console.log('Kept existing #'+issue.number+' '+task.title);
  records.push({key:task.key,number:issue.number,url:issue.html_url,nodeId:issue.node_id,title:issue.title,type:task.type});
 }
 writeFileSync(join(root,'.github/pilot/issues.json'),JSON.stringify(records,null,2)+'\n');
 const rows=records.map((r,i)=>`| [#${r.number} ${r.title}](${r.url}) | ${catalog.tasks[i].outcome} | ${catalog.tasks[i].prerequisite} | ${catalog.tasks[i].claimNote} |`).join('\n');
 writeFileSync(join(root,'docs/TASKS.md'),`# 任務認領清單\n\n先閱讀 Issue 全文，留言提出做法，經確認後才指定 Assignee。未填入任何學生帳號或交付承諾。\n\n| 任務 | 交付成果 | 前置需求 | 目前可做什麼 |\n| --- | --- | --- | --- |\n${rows}\n\n所有題目目前都有尚未滿足的素材或成果依賴，因此保留 \`blocked\`。兩張研究題加上 \`claimable\`：可先提出認領與觀察方法，不代表已取得社團存取／引用許可。\n\n完整狀態以 Issues 為準；看板尚待主辦者完成 Projects 授權。[看板設定](PROJECT_BOARD.md) · [資源取得狀態](RESOURCES.md)\n`);
 console.log('Saved issue references and task index. Existing issue discussions, assignments and bodies were not overwritten.');
}catch(error){console.error(error.message);process.exitCode=1;}
