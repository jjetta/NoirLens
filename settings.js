const urlList = document.getElementById("urlList")

// Update the displayed URL list 
function updateUrlList(){
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