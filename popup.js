const toggleButton = document.getElementById("toggleButton")

const urlForm = document.getElementById("urlForm")
const urlInput = document.getElementById("urlInput")

let urls = []

// Load existing URLs from local storage when popup opens 
document.addEventListener('DOMContentLoaded', () => {
  const storedUrls = JSON.parse(localStorage.getItem('urls')) || []
  urls = storedUrls
  updateUrlList();
})

// Handle form submission 
urlForm.addEventListener('submit', (event) => {
  event.preventDefault() // Prevent form from submitting 

  const newUrl = urlInput.value.trim() // Get value and trim whitespace
  if (newUrl && !urls.includes(newUrl)) { // Check if the URL isn't empty and not already in the list
    urls.push(newUrl) 
    localStorage.setItem('urls', JSON.stringify(urls))
    updateUrlList()
    urlInput.value = ''
    console.log("Url added")
  } else {
    alert("Enter a valid URL that isn't already in the list")
  }
})

toggleButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleGrayscale" });
  });
});


