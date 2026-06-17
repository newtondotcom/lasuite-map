import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});


const repos = await octokit.request('GET /orgs/{org}/repos', {
    org: 'suitenumerique',
    headers: {
      'X-GitHub-Api-Version': '2026-03-10'
    },
    per_page: 100,
});

console.log(repos.data.length);

await Bun.write('src/assets/projects.json', JSON.stringify(repos.data, null, 2));