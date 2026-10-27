import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {githubClient,repository} from './github.mjs';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const statuses=['待認領','已認領','進行中','待審閱','已完成'];
const types=['研究','知識','內容','AI','工程','測試','提案'];
const colors=['GRAY','BLUE','YELLOW','ORANGE','GREEN'];
try{
 const {api,graphql}=await githubClient();const repo=await api('/repos/'+repository);
 if(!repo.private)throw new Error('Repository must be Private.');
 const data=await graphql('query { viewer { id login projectsV2(first:100) { nodes { id title url closed repositories(first:100){nodes{nameWithOwner}} } } } }');
 if(data.viewer.login!=='peculab')throw new Error('Sign in as peculab before creating the project.');
 let project=data.viewer.projectsV2.nodes.find(p=>p.title==='Ownership Code Pilot'&&!p.closed);
 if(project&&!project.repositories.nodes.some(r=>r.nameWithOwner===repository))throw new Error('An existing project has this title but is not linked to this repository. Inspect it manually before proceeding; it was not changed.');
 if(!project)project=(await graphql('mutation($owner:ID!){createProjectV2(input:{ownerId:$owner,title:"Ownership Code Pilot"}){projectV2{id title url}}}',{owner:data.viewer.id})).createProjectV2.projectV2;
 await graphql('mutation($p:ID!){updateProjectV2(input:{projectId:$p,public:false}){projectV2{id}}}',{p:project.id});
 await graphql('mutation($p:ID!,$r:ID!){linkProjectV2ToRepository(input:{projectId:$p,repositoryId:$r}){repository{id}}}',{p:project.id,r:repo.node_id});
 const fieldsQuery='query($p:ID!){node(id:$p){... on ProjectV2{fields(first:100){nodes{... on ProjectV2Field{id name dataType} ... on ProjectV2SingleSelectField{id name options{id name}}}}}}}';
 let fields=(await graphql(fieldsQuery,{p:project.id})).node.fields.nodes;
 let status=fields.find(f=>f.name==='Status');if(!status)throw new Error('Default Status field not found. Inspect the project before retrying.');
 // Never reset options on an established board with unrelated task statuses.
 const wanted=statuses.every(name=>status.options?.some(o=>o.name===name));
 if(!wanted){
  const safe=status.options?.every(o=>['Todo','In Progress','Done',...statuses].includes(o.name));
  if(!safe)throw new Error('Project has custom Status options. Review them manually; nothing was overwritten.');
  await graphql('mutation($f:ID!,$o:[ProjectV2SingleSelectFieldOptionInput!]!){updateProjectV2Field(input:{fieldId:$f,singleSelectOptions:$o}){projectV2Field{... on ProjectV2SingleSelectField{id}}}}',{f:status.id,o:statuses.map((name,i)=>({name,color:colors[i],description:name}))});
 }
 if(!fields.some(f=>f.name==='預計交付日'))await graphql('mutation($p:ID!){createProjectV2Field(input:{projectId:$p,dataType:DATE,name:"預計交付日"}){projectV2Field{... on ProjectV2Field{id}}}}',{p:project.id});
 if(!fields.some(f=>f.name==='任務類型'))await graphql('mutation($p:ID!,$o:[ProjectV2SingleSelectFieldOptionInput!]!){createProjectV2Field(input:{projectId:$p,dataType:SINGLE_SELECT,name:"任務類型",singleSelectOptions:$o}){projectV2Field{... on ProjectV2SingleSelectField{id}}}}',{p:project.id,o:types.map(name=>({name,color:'BLUE',description:name}))});
 fields=(await graphql(fieldsQuery,{p:project.id})).node.fields.nodes;status=fields.find(f=>f.name==='Status');const type=fields.find(f=>f.name==='任務類型');
 const issues=JSON.parse(readFileSync(join(root,'.github/pilot/issues.json'),'utf8'));
 for(const issue of issues){
  const item=(await graphql('mutation($p:ID!,$c:ID!){addProjectV2ItemById(input:{projectId:$p,contentId:$c}){item{id fieldValueByName(name:"Status"){... on ProjectV2ItemFieldSingleSelectValue{name}}}}}',{p:project.id,c:issue.nodeId})).addProjectV2ItemById.item;
  const set=async(field,option)=>graphql('mutation($p:ID!,$i:ID!,$f:ID!,$v:String!){updateProjectV2ItemFieldValue(input:{projectId:$p,itemId:$i,fieldId:$f,value:{singleSelectOptionId:$v}}){projectV2Item{id}}}',{p:project.id,i:item.id,f:field.id,v:option.id});
  if(!item.fieldValueByName)await set(status,status.options.find(o=>o.name==='待認領'));
  await set(type,type.options.find(o=>o.name===issue.type));
 }
 writeFileSync(join(root,'.github/pilot/project.json'),JSON.stringify({id:project.id,url:project.url,private:true,statuses,boardView:'needs manual confirmation'},null,2)+'\n');
 console.log('Private project configured: '+project.url);
 console.log('Open the project and add/confirm a Board view grouped by Status; show Assignees, 預計交付日, 任務類型 and Labels. No member invitations or dates were assigned.');
 console.log('Update docs/PROJECT_BOARD.md after visually confirming the Board view.');
}catch(error){console.error(error.message);process.exitCode=1;}
