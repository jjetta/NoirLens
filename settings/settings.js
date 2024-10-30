import { urls } from "../popup/popup.js"

const urlList = document.getElementById("urlList")
const clearButton = document.getElementById("clearButton")

// Update the displayed URL list 
export function updateUrlList(){
  urlList.innerHTML = ''
  urls.forEach(url => {
    const li = document.createElement('li')
    li.textContent = url
    urlList.appendChild(li)
  })
}

// Load existing URLs from local storage when popup opens 
document.addEventListener('DOMContentLoaded', () => {
    const storedUrls = JSON.parse(localStorage.getItem('urls')) || []
    urls = storedUrls
    updateUrlList();
})

clearButton.addEventListener("click", () => {
  urlList.innerHTML = ''
  urls = []
  localStorage.setItem('urls', JSON.stringify(urls));
})