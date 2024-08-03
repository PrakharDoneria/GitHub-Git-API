import { Context } from "https://deno.land/x/oak/mod.ts";
import { makeGitHubRequest } from "../utils/githubClient.ts";

export async function listRepos(context: Context) {
  const token = context.request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    context.response.status = 401;
    context.response.body = { error: "Unauthorized" };
    return;
  }

  try {
    const repos = await makeGitHubRequest("/user/repos", "GET", token);
    context.response.body = repos;
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error: error.message };
  }
}
