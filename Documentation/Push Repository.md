### README

#### Push File to Repository

**URL:** `/repos/{owner}/{repo}/contents/{path}`  
**Method:** `PUT`

**Description:** Uploads a file to the specified path in the repository and commits the change.

**Request Headers:**

- `Authorization`: Bearer token, your GitHub personal access token.
- `Content-Type`: `application/json`

**Request Body:**
```json
{
  "message": "Commit message",
  "content": "Base64-encoded content",
  "branch": "branch-name"
}
```

**Sample Response:**
```json
{
  "content": {
    "name": "file.txt",
    "path": "path/to/file.txt",
    "sha": "abcdef123456",
    "size": 1234,
    "url": "https://api.github.com/repos/username/repo/contents/path/to/file.txt"
  },
  "commit": {
    "sha": "abcdef1234567890",
    "message": "Commit message"
  }
}
```

**Example Request in Java:**

```java
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Base64;

public class GitHubApiExample {
    public static void main(String[] args) {
        try {
            // Set the GitHub API endpoint and token
            String owner = "username";
            String repo = "repository-name";
            String path = "path/to/file.txt";
            URL url = new URL("http://localhost:8000/repos/" + owner + "/" + repo + "/contents/" + path);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("PUT");
            conn.setRequestProperty("Authorization", "Bearer GITHUB_PERSONAL_ACCESS_TOKEN");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            // Prepare the JSON payload
            String content = "This is the content of the file";
            String jsonPayload = "{"
                + "\"message\": \"Commit message\","
                + "\"content\": \"" + Base64.getEncoder().encodeToString(content.getBytes()) + "\","
                + "\"branch\": \"main\""
                + "}";

            // Write the JSON payload to the output stream
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonPayload.getBytes());
                os.flush();
            }

            // Read the response
            try (BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    response.append(line);
                }
                System.out.println("Response: " + response.toString());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

Replace `GITHUB_PERSONAL_ACCESS_TOKEN` with actual GitHub personal access token and adjust the `owner`, `repo`, `path`, and `content` variables as needed.