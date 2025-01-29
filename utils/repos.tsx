interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
    language: string;
    topics: string[];
    updated_at: string;
    homepage: string;
}

interface Repo {
    name: string;
    description: string | null;
    url: string;
    language: string;
    topics: string[];
    updatedAt: string;
    live: string;
}

export function filterRepos(repos: GitHubRepo[], topic: string): Repo[] {
    const filteredRepos = repos.filter((repo) => repo.topics.includes(topic));

    const mappedRepos = filteredRepos.map(repo => (
        {
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            topics: repo.topics,
            updatedAt: repo.updated_at,
            live: repo.homepage
        }
    ))
    console.log(mappedRepos)
    return mappedRepos;
}