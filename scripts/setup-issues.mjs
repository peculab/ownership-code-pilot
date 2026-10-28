import {readFileSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {githubClient, repository} from './github.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const catalog = JSON.parse(readFileSync(join(root, '.github/pilot/tasks.json'), 'utf8'));
const {api, pages} = await githubClient();
const repo = await api('/repos/' + repository);
if (repo.private) throw new Error('Make the repository public before publishing open-source contribution tasks.');

const existingLabels = new Map((await pages('/repos/' + repository + '/labels')).map(label => [label.name, label]));
for (const label of catalog.labels) {
  const current = existingLabels.get(label.name);
  if (!current) {
    await api('/repos/' + repository + '/labels', {method: 'POST', body: label});
  } else if (current.color !== label.color || current.description !== label.description) {
    await api('/repos/' + repository + '/labels/' + encodeURIComponent(label.name), {method: 'PATCH', body: {color: label.color, description: label.description}});
  }
}

const existing = (await pages('/repos/' + repository + '/issues?state=all')).filter(issue => !issue.pull_request);
const records = [];
for (const task of catalog.tasks) {
  const marker = `<!-- open-source-task:${task.key} -->`;
  let issue = existing.find(item => item.body?.includes(marker));
  if (!issue) {
    issue = await api('/repos/' + repository + '/issues', {
      method: 'POST',
      body: {title: task.title, body: marker + '\n\n' + task.body, labels: task.labels}
    });
    console.log(`Created #${issue.number}: ${task.title}`);
  } else {
    console.log(`Kept #${issue.number}: ${task.title}`);
  }
  records.push({key: task.key, number: issue.number, url: issue.html_url, nodeId: issue.node_id, title: issue.title, type: task.type});
}

writeFileSync(join(root, '.github/pilot/issues.json'), JSON.stringify(records, null, 2) + '\n');
const rows = records.map((record, index) => `| [#${record.number} ${record.title}](${record.url}) | ${catalog.tasks[index].outcome} |`).join('\n');
writeFileSync(join(root, 'docs/TASKS.md'), `# Open contribution tasks\n\nThese tasks use synthetic or public inputs and can begin without private partner material. Comment on an Issue before larger work so contributors do not duplicate effort.\n\n| Task | Reviewable outcome |\n| --- | --- |\n${rows}\n\nSee [Getting started](GETTING_STARTED.md), [Safety](SAFETY.md), and [Data handling](DATA_HANDLING.md). GitHub Issues are the source of truth for current status.\n`);
console.log('Saved public issue references and task index.');
