// Listen for the DOMContentLoaded event to ensure the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Request the background script for the current tab URL
  chrome.runtime.sendMessage({ action: "checkUrl" }, (response) => {
    const currentUrl = response.currentUrl
    console.log("Current URL: ", currentUrl)

    chrome.storage.sync.get("urls", (data) => {
      const urls = data.urls
      console.log("Stored URLs: ", urls)
  
      // Try to match the hostname (domain) or path
      const currentUrlObj = new URL(currentUrl)
      const match = urls.some(url => {
        try {
          const urlObj = new URL(url);
          return currentUrlObj.hostname === urlObj.hostname 
        } catch (e) {
          console.error("Error parsing URL:", url, e)
          return false
        }
      })
  
      console.log(match)

      if (match) {
          console.log("url match!")
          document.body.style.filter = "grayscale(100%)"
      } else {
            document.body.style.filter = "none"
        }
    })
  })
  
})
