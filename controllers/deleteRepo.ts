import { Context } from "https://deno.land/x/oak/mod.ts";
import { makeGitHubRequest } from "../utils/githubClient.ts";

export async function deleteRepo(context: Context) {
  const token = context.request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    context.response.status = 401;
    context.response.body = { error: "Unauthorized" };
    return;
  }

  const { owner, repo } = context.params;

  try {
    await makeGitHubRequest(`/repos/${owner}/${repo}`, "DELETE", token);
    context.response.body = { message: "Repository deleted successfully" };
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error: error.message };
  }
}
