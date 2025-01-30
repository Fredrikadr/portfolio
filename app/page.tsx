import { filterRepos } from "@/utils/repos";
import Image from "next/image";
import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: process.env.TOKEN
});

async function getRepos() {
  try {
    const repos = await octokit.request("GET /users/{owner}/repos", {
      owner: "fredrikadr",
    });
    return repos.data;

  } catch (error: any) {
    console.error("Error fetching repos. ", error.message);
  }
}

const repos = await getRepos();
const filtered = filterRepos(repos, "showcase")

console.log(filtered)

export default function Home() {
  return (
    <></>
  );
}
