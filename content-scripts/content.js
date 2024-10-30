chrome.storage.sync.get("isGrayscale", (data) => {
  if (data.isGrayscale) {
    document.body.style.filter = "grayscale(100%)";
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleGrayscale") {
    chrome.storage.sync.get("isGrayscale", (data) => {
      const newGrayscaleState = !data.isGrayscale;
      chrome.storage.sync.set({ isGrayscale: newGrayscaleState });
      document.body.style.filter = newGrayscaleState ? "grayscale(100%)" : "none";
    });
  }
});

