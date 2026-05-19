function checkForReddit() {
  chrome.tabs.query({}, (tabs) => {
    const redditOpen = tabs.some(tab => tab.url && tab.url.includes("reddit.com"));

    chrome.action.setPopup({
      popup: redditOpen ? "sad.html" : "hello.html"
    });
  });
}

// Check whenever a tab is updated, opened, or closed
chrome.tabs.onUpdated.addListener(checkForReddit);
chrome.tabs.onRemoved.addListener(checkForReddit);
chrome.tabs.onCreated.addListener(checkForReddit);