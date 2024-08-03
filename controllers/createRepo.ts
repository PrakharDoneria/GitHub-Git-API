import { Context } from "https://deno.land/x/oak/mod.ts";
import { makeGitHubRequest } from "../utils/githubClient.ts";

export async function createRepo(context: Context) {
  const token = context.request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    context.response.status = 401;
    context.response.body = { error: "Unauthorized" };
    return;
  }

  const body = await context.request.body().value;

  try {
    const repo = await makeGitHubRequest("/user/repos", "POST", token, body);
    context.response.body = repo;
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error: error.message };
  }
}
