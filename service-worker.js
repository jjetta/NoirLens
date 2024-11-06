// Listen for messages from the content script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkUrl") {
    // Query the active tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      // Send the current URL to the content script
      sendResponse({ currentUrl: currentUrl });
    });
    
    // Indicate that you want to send a response asynchronously
    return true;
  }
});

