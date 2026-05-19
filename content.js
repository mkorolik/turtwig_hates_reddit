const overlay = document.createElement("div");
overlay.id = "reddit-overlay";

overlay.innerHTML = `
  <div id="overlay-box">
    <img src="${chrome.runtime.getURL('surprise_turtwig.png')}" alt="Warning" style="width:200px;height:200px">
    <h1>You opened Reddit???</h1>
    <p>Turtwig hates reddit</p>
    <button id="close-btn">Yes I want to make Turtwig sad</button>
  </div>
`;

document.body.appendChild(overlay);

document.getElementById("close-btn").addEventListener("click", () => {
  overlay.remove();
});