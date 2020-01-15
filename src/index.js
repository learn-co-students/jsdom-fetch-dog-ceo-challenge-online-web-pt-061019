console.log('%c HI', 'color: firebrick')

var imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImages(json))
  };
  
  function renderImages(json) {
      
    json.message.forEach( image => {
      const imageContainer = document.getElementById('dog-image-container')
      const img = document.createElement('img')
      img.src = image
      imageContainer.appendChild(img)
    });
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
  