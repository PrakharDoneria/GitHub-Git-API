#### Endpoint Description

**URL:** `/repos`

**Method:** `GET`

**Description:** This endpoint lists all repositories of the authenticated user.

#### Request Headers

- `Authorization`: A required header that contains the GitHub personal access token.

Example:
```json
{
  "Authorization": "Bearer GITHUB_PERSONAL_ACCESS_TOKEN"
}
```

#### Sample Request

To make a request to this endpoint, you need to include the GitHub personal access token in the `Authorization` header. Here is an example using `curl`:

```sh
curl -H "Authorization: Bearer GITHUB_PERSONAL_ACCESS_TOKEN" http://localhost:8000/repos
```

#### Response

On success, the endpoint returns a JSON array of repository objects. Each repository object contains details about a repository.

**Status Code:** `200 OK`

**Sample Response:**
```json
[
  {
    "id": 123456789,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjM0NTY3ODk=",
    "name": "example-repo",
    "full_name": "username/example-repo",
    "private": false,
    "owner": {
      "login": "username",
      "id": 12345,
      "node_id": "MDQ6VXNlcjEyMzQ1",
      "avatar_url": "https://avatars.githubusercontent.com/u/12345?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/username",
      "html_url": "https://github.com/username",
      "followers_url": "https://api.github.com/users/username/followers",
      "following_url": "https://api.github.com/users/username/following{/other_user}",
      "gists_url": "https://api.github.com/users/username/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/username/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/username/subscriptions",
      "organizations_url": "https://api.github.com/users/username/orgs",
      "repos_url": "https://api.github.com/users/username/repos",
      "events_url": "https://api.github.com/users/username/events{/privacy}",
      "received_events_url": "https://api.github.com/users/username/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/username/example-repo",
    "description": "This is an example repository.",
    "fork": false,
    "url": "https://api.github.com/repos/username/example-repo",
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-02T12:00:00Z",
    "pushed_at": "2023-01-03T12:00:00Z",
    "git_url": "git://github.com/username/example-repo.git",
    "ssh_url": "git@github.com:username/example-repo.git",
    "clone_url": "https://github.com/username/example-repo.git",
    "svn_url": "https://github.com/username/example-repo",
    "homepage": null,
    "size": 123,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZW1pdA=="
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main"
  },
  ...
]
```

#### Error Responses

**Status Code:** `401 Unauthorized`

**Sample Response:**
```json
{
  "error": "Unauthorized"
}
```

This error occurs if the `Authorization` header is missing or if the token is invalid.

**Status Code:** `500 Internal Server Error`

**Sample Response:**
```json
{
  "error": "Failed to fetch repositories"
}
```

This error occurs if there is an issue with the request to the GitHub API.