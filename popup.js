const toggleSwitch = document.getElementById("toggleSwitch")
const settingsButton = document.getElementById("settingsButton")

toggleSwitch.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleGrayscale" });
  });
});

settingsButton.addEventListener("click", () => {
  window.open('settings.html') 
})