export async function makeGitHubRequest(endpoint: string, method: string, token: string, body?: any) {
  const headers = new Headers();
  headers.append("Authorization", `token ${token}`);
  headers.append("Accept", "application/vnd.github.v3+json");

  if (body) {
    headers.append("Content-Type", "application/json");
  }

  const response = await fetch(`https://api.github.com${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "GitHub API request failed");
  }

  return response.json();
}
