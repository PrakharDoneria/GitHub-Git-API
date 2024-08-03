Here’s a summary README with usage instructions and a link to the `/Documentation/` folder for detailed endpoint usage:

### README

## GitHub API Server

This server provides endpoints to interact with GitHub repositories using Deno. You can create, delete, pull, and push to repositories with this API.

### Base URL

```
http://localhost:8000
```

### Endpoints

1. **Create Repository**
   - **URL:** `/repos`
   - **Method:** `POST`
   - **Description:** Creates a new repository for the authenticated user.
   - **Request Body:** `{ "name": "new-repo", "description": "A newly created repository.", "private": false }`
   - **Response:** Details of the newly created repository.

2. **Delete Repository**
   - **URL:** `/repos/{owner}/{repo}`
   - **Method:** `DELETE`
   - **Description:** Deletes the specified repository for the authenticated user.
   - **Response:** Confirmation of successful deletion.

3. **Pull Requests**
   - **URL:** `/repos/{owner}/{repo}/pulls`
   - **Method:** `GET`
   - **Description:** Retrieves the list of pull requests for the specified repository.
   - **Response:** List of pull requests with details.

4. **Push File to Repository**
   - **URL:** `/repos/{owner}/{repo}/contents/{path}`
   - **Method:** `PUT`
   - **Description:** Uploads a file to the specified path in the repository and commits the change.
   - **Request Body:** `{ "message": "Commit message", "content": "Base64-encoded content", "branch": "branch-name" }`
   - **Response:** Details of the pushed file and commit.

### Usage

For detailed usage and endpoint descriptions, please refer to the [Documentation](Documentation/).

### Running the Server

To run the server, execute the following command:

```sh
deno run --allow-net index.ts
```