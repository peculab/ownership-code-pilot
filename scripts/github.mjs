import {spawnSync} from 'node:child_process';
export const repository='peculab/ownership-code-pilot';
export async function githubClient(){
 let token=process.env.GH_TOKEN||process.env.GITHUB_TOKEN;
 if(!token){const cli=spawnSync(process.env.GH_BIN||'gh',['auth','token','--hostname','github.com'],{encoding:'utf8'});if(cli.status===0)token=cli.stdout.trim();}
 if(!token){
  const result=spawnSync('git',['credential','fill'],{input:'protocol=https\nhost=github.com\n\n',encoding:'utf8',env:{...process.env,GIT_TERMINAL_PROMPT:'0',GCM_INTERACTIVE:'Never'}});
  if(result.status===0)token=result.stdout.split('\n').find(line=>line.startsWith('password='))?.slice(9).trim();
 }
 if(!token)throw new Error('Sign in to GitHub first. Do not paste tokens into chat or source files.');
 const headers={Authorization:'Bearer '+token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28','User-Agent':'ownership-code-pilot-setup'};
 async function api(path,{method='GET',body}={}){
  const r=await fetch('https://api.github.com'+path,{method,headers,body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(30000)});
  const data=r.status===204?null:await r.json();
  if(!r.ok)throw new Error(`GitHub ${method} ${path.split('?')[0]} failed (${r.status}). Check repository permissions and requested scopes.`);
  return data;
 }
 const graphql=async(query,variables={})=>{const result=await api('/graphql',{method:'POST',body:{query,variables}});if(result.errors?.length)throw new Error('GitHub GraphQL rejected this operation. Confirm project scope and Project access before retrying.');return result.data;};
 async function pages(path){const all=[];for(let page=1;;page++){const items=await api(`${path}${path.includes('?')?'&':'?'}per_page=100&page=${page}`);all.push(...items);if(items.length<100)return all;}}
 return {api,graphql,pages};
}
