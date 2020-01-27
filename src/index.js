console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedNames = [] 

document.addEventListener("DOMContentLoaded", function() {
  fetchImg()
  fetchBreed()

  function fetchImg() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => renderImg(json))
  };

  function renderImg(json) {
    json.message.forEach(image => {
      let imgContainer = document.querySelector('#dog-image-container')
      let img = document.createElement('img')
      img.src = image
      imgContainer.appendChild(img)
    })
  };

  function fetchBreed() {
    fetch(breedUrl) 
    .then(res => res.json())
    .then(json => renderBreeds(json))
  };

  function renderBreeds(json) {
    Object.keys(json.message).forEach(breed => {
      let dogBreedUl = document.querySelector('ul#dog-breeds')
      let dogBreedLi = document.createElement('li')
      dogBreedLi.innerText = breed 
      dogBreedUl.appendChild(dogBreedLi)
    })
  };

  const dogBreedUl = document.querySelector('#dog-breeds')
  dogBreedUl.addEventListener('click', function(e){
      e.target.style.color = 'blue'
  });

  let alphaDropdown = document.getElementById('breed-dropdown')
  alphaDropdown.addEventListener('change', function(e) {
    let letter = e.target.value
    let breeds = dogBreedUl.getElementsByTagName("li");
        for (let i = 0; i < breeds.length; i++) {
        breedNames.push(breeds[i].innerText)
        };
    let filterNames = breedNames.filter(breed => breed.startsWith(letter))
    dogBreedUl.innerHTML = ""
    filterNames.forEach(function(name){
        dogBreedUl.innerHTML += `<li>${name}</li>`
    })
  })
});