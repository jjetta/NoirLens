const toggleSwitch = document.getElementById("toggleSwitch")
const settingsButton = document.getElementById("settingsButton")

const urlForm = document.getElementById("urlForm")
const urlInput = document.getElementById("urlInput")
const urlList = document.getElementById("urlList")

let urls = []

// Load existing URLs from local storage when popup opens 
document.addEventListener('DOMContentLoaded', () => {
  const storedUrls = JSON.parse(localStorage.getItem('urls')) || []
  urls = storedUrls
  updateUrlList();
})

// Update the displayed URL list 
function updateUrlList(){
  urlList.innerHTML = ''
  urls.forEach(url => {
    const li = document.createElement('li')
    li.textContent = url
    urlList.appendChild(li)
  })
}

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

toggleSwitch.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleGrayscale" });
  });
});

settingsButton.addEventListener("click", () => {
  window.open('settings.html') 
})


