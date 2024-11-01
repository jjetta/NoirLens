let urls
const clearButton = document.getElementById("clearButton")
const urlList = document.getElementById("urlList")

// Load existing URLs from local storage when popup opens 
document.addEventListener('DOMContentLoaded', () => {
  const storedUrls = JSON.parse(localStorage.getItem('urls')) || []
  urls = storedUrls
  updateUrlList()
  console.log('DOMContentLoaded, urls loaded')
  console.log(urls)
})

clearButton.addEventListener('click', () => {
    urlList.innerHTML = ''; // Clear the URL list
    urls = []; // Reset the urls array
    localStorage.setItem('urls', JSON.stringify(urls)); // Update localStorage
    console.log("URLs cleared");
})


// Update the displayed URL list
function updateUrlList() {
    urlList.innerHTML = ''; // Clear the list before adding items
    urls.forEach(url => {
      const li = document.createElement('li');
      li.textContent = url;
      urlList.appendChild(li);
    });
    console.log(urlList);
}
