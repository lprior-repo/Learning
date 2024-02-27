import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";
dotenv.config();
const PAT = process.env.PAT;

const octokit = new Octokit({ auth: PAT });

async function getRepo() {
  const response = await octokit.request("GET /users/{username}/repos", {
    username: "lprior-repo",
  });
  console.log(response);
  return response;
}

console.log(getRepo());
