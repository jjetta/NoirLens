const urlForm  = document.getElementById("urlForm")
const urlInput = document.getElementById("urlInput")
const powerButton = document.getElementById("powerButton")

let urls
chrome.storage.sync.get("urls", (data) => {
  urls = data.urls || []
  console.log(urls)
}) 

// Handle form submission 
urlForm.addEventListener('submit', (event) => {
  event.preventDefault() // Prevent form from submitting 
  handleFormInput() 
})

function handleFormInput(){
  const inputUrl = urlInput.value.trim() // Get value and trim whitespace
  if (!urls.includes(inputUrl)) { // Check if the URL isn't empty and not already in the list
    urls.push(inputUrl) 
    
    chrome.storage.sync.set({"urls": urls}, () => { // this will replace the url array in storage with the updated url list
      console.log("URLs in storage updated")
    })
    urlInput.value = ''

  } else {
    alert("The url you entered is already in your list.")
  }
}

