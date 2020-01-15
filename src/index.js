console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  loadImages();
  loadBreeds();
  dropDownFilter();
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []

let filteredBreeds = []

function loadImages() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImageElements(json));
}

function addImageElements(json) {
  let imagesContainer = document.getElementById('dog-image-container');
  json.message.forEach(image => {
    let newImageElem = document.createElement('img');
    newImageElem.src = image;
    imagesContainer.appendChild(newImageElem);
  });
}

function loadBreeds() {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => createBreedsArray(json));
}

function createBreedsArray(json) {
  allBreeds = Object.keys(json.message)
  listBreeds(allBreeds);
}

function listBreeds(breeds) {
  let dogBreedList = document.getElementById('dog-breeds');
  breeds.forEach(breed => {
    let newLiElem = document.createElement('li');
    newLiElem.textContent = breed;
    newLiElem.addEventListener('click', changeColor)
    dogBreedList.appendChild(newLiElem);
  })
}

function changeColor(event) {
  event.target.style.color = "red";
}

function dropDownFilter() {
  const dropdownElem = document.getElementById('breed-dropdown')
  const dogBreedList = document.getElementById('dog-breeds');
  dropdownElem.addEventListener('change', function() {
    while (dogBreedList.firstChild) dogBreedList.removeChild(dogBreedList.firstChild);
    filterBreeds(this.value);
  })
}

function filterBreeds(letter) {
  filteredBreeds = [];
  filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
  listBreeds(filteredBreeds);
}
