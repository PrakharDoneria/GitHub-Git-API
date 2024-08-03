import { Context } from "https://deno.land/x/oak/mod.ts";
import { makeGitHubRequest } from "../utils/githubClient.ts";

export async function pushRepo(context: Context) {
  const token = context.request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    context.response.status = 401;
    context.response.body = { error: "Unauthorized" };
    return;
  }

  const { owner, repo, branch, commitMessage, content } = await context.request.body().value;

  const body = {
    message: commitMessage,
    content: btoa(content),
    branch: branch,
  };

  try {
    const result = await makeGitHubRequest(`/repos/${owner}/${repo}/contents/path/to/file`, "PUT", token, body);
    context.response.body = result;
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error: error.message };
  }
}
