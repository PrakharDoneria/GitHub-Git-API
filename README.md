### Base URL

[https://sketchware.deno.dev/](https://sketchware.deno.dev/)


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