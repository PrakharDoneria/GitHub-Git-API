### README

#### Pull Requests

**URL:** `/repos/{owner}/{repo}/pulls`  
**Method:** `GET`

**Description:** Retrieves the list of pull requests for the specified repository.

**Request Headers:**

- `Authorization`: Bearer token, your GitHub personal access token.

**Sample Response:**
```json
[
  {
    "id": 123456,
    "number": 1,
    "state": "open",
    "title": "Update README",
    "user": {
      "login": "username"
    },
    "body": "This pull request updates the README file."
  }
]
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
            String repo = "repository-name";
            URL url = new URL("http://localhost:8000/repos/" + owner + "/" + repo + "/pulls");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
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