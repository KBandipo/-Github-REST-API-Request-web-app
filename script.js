const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");
const resultDiv = document.getElementById("result");

// GET request Function
function makeGetRequest() {
  // Make a GET request to fetch data related to issues or pull requests
  fetch(
    "https://api.github.com/repos/KBandipo/Alstride-E-commerce-Website/issues"
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

// Event listeners for button clicks
getButton.addEventListener("click", makeGetRequest);
postButton.addEventListener("click", makePostRequest);
