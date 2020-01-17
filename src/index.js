console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedNames = []

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

    
    const alphaDropdown = document.getElementById('breed-dropdown')
    alphaDropdown.addEventListener('change', function(event) {
        const letter = event.target.value

        let breeds = dogBreedUl.getElementsByTagName("li");
            for (let i = 0; i < breeds.length; i++) {
             breedNames.push(breeds[i].innerText)
            };

        let filterNames = breedNames.filter(breed => breed.startsWith(letter))
        filterNames.forEach(function(name){
            dogBreedUl.innerHTML = name
        });
            ///for (let i = 0; i < filterNames.length; i++) {
                //`<li>${filterNames[i]}</li>`
           //};
          // dogBreedUl.innerHTML = `<li>${filterNames.}</li>`
    })
})
  