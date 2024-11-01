const toggleButton = document.getElementById("toggleButton")
const urlForm      = document.getElementById("urlForm")
const urlInput     = document.getElementById("urlInput")

export let urls = []

// Handle form submission 
urlForm.addEventListener('submit', (event) => {
  event.preventDefault() // Prevent form from submitting 
  handleFormInput() 
})

// Get the components of the URL
const protocol = window.location.protocol; // e.g., "https:"
const host = window.location.host; // e.g., "www.example.com"

// Combine them to get everything except the path
const baseUrl = `${protocol}//${host}`

// This event listener will check if the current webpage is in the toggle list
document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const currentUrl = tabs[0].url
      if (currentUrl.startsWith(baseUrl) && urls.includes(baseUrl)) {
        console.log("baseUrl: `$baseUrl`")
        console.log("currentUrl: `$currentUrl`")
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleGrayscale" })
      }
    }
  })
})

toggleButton.addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleGrayscale" })
  })
})

function handleFormInput(){
  const inputUrl = urlInput.value.trim() // Get value and trim whitespace
  if (!urls.includes(inputUrl)) { // Check if the URL isn't empty and not already in the list
    urls.push(inputUrl) 
    console.log(urls)
    localStorage.setItem('urls', JSON.stringify(urls))
    urlInput.value = ''
    console.log("Url added")
  } else {
    alert("Enter a valid URL that isn't already in the list")
  }
}