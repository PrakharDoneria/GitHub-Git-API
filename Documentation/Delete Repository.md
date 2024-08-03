### README

#### Delete Repository

**URL:** `/repos/{owner}/{repo}`  
**Method:** `DELETE`

**Description:** Deletes the specified repository for the authenticated user.

**Request Headers:**

- `Authorization`: Bearer token, your GitHub personal access token.

**Sample Response:**
```json
{
  "message": "Repository deleted successfully"
}
```

**Example Request in Java:**

```java
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class GitHubApiExample {
    public static void main(String[] args) {
        try {
            // Set the GitHub API endpoint and token
            String owner = "username";
            String repo = "repository-to-delete";
            URL url = new URL("http://localhost:8000/repos/" + owner + "/" + repo);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("DELETE");
            conn.setRequestProperty("Authorization", "Bearer GITHUB_PERSONAL_ACCESS_TOKEN");

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

Replace `GITHUB_PERSONAL_ACCESS_TOKEN` with actual GitHub personal access token and adjust the `owner` and `repo` variables as needed.