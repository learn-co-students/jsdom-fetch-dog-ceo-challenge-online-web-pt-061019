console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImages() {
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImages(json))
  };
  
  function fetchBreeds() {
    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => renderBreeds(json))
  };

  function renderImages(json) {
    json.message.forEach( image => {
      const imageContainer = document.getElementById('dog-image-container')
      const img = document.createElement('img')
      img.src = image
      imageContainer.appendChild(img)
    });
  };

  function renderBreeds(json) {
      Object.keys(json.message).forEach( breed => {
      const dogBreedList = document.getElementById('dog-breeds')
      const listItem = document.createElement('li')
      listItem.innerText = breed
      dogBreedList.appendChild(listItem)
    });
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    
  })
  