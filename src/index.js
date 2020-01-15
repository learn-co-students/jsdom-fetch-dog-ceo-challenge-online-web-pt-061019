console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    fetch(imgURL)
      .then(resp => resp.json())
      .then(json => renderImages(json))
  }
  
  function renderImages(json) {
    json.forEach( imgURL => {
      const imageContainer = document.getElementById('dog-image-container')
      const img = document.createElement('img')
      img.src = `${imgURL}`
      imageContainer.appendChild(img)
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
  