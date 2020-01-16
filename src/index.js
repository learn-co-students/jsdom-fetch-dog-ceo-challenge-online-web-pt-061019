console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  
  document.addEventListener('DOMContentLoaded', function() {
    
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
          const dogBreedUl = document.getElementById('dog-breeds')
          const breedLi = document.createElement('li')
          breedLi.innerText = breed
          dogBreedUl.appendChild(breedLi)
         });
        };

    fetchImages()
    fetchBreeds()

    const dogBreedUl = document.getElementById('dog-breeds')
    dogBreedUl.addEventListener('click', function(event){
        event.target.style.color = 'green'
    });

    const alphaDropdown = document.getElementById('.breed-dropdown')
    alphaDropdown.addEventListener('change', function(event) {
        const letter = event.target.value
        
    })
  })
  