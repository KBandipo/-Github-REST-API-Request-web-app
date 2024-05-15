const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");
const resultDiv = document.getElementById("result");
const issueTitleInput = document.getElementById("issueTitle");
const issueBodyInput = document.getElementById("issueBody");

// GET request Function
function makeGetRequest() {
  // Make a GET request to fetch data related to issues or pull requests
  fetch(
    "https://api.github.com/repos/KBandipo/Github-REST-API-Request-web-app/issues"
  )
    .then((response) => response.json())
    .then((data) => {
      resultDiv.innerHTML = "";

      data.forEach((issue) => {
        const issueLink = document.createElement("a");
        issueLink.href = issue.html_url;
        issueLink.textContent = issue.title;
        issueLink.target = "_blank";
        resultDiv.appendChild(issueLink);
        resultDiv.appendChild(document.createElement("br"));
      });
    })
    .catch((error) => console.error("Error:", error));
}

// POST request Function
function makePostRequest() {
  const title = issueTitleInput.value;
  const body = issueBodyInput.value;

  // GitHub access token
  const accessToken = "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";

  fetch(
    "https://api.github.com/repos/KBandipo/Github-REST-API-Request-web-app/issues",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ title, body }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to create issue! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      resultDiv.innerText = `New Issue Created: ${data.title}`;
    })
    .catch((error) => console.error("Error creating issue:", error));
}

// Event listeners for button clicks
getButton.addEventListener("click", makeGetRequest);
postButton.addEventListener("click", makePostRequest);
