console.log('%c Woof', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

let breeds = []

document.addEventListener("DOMContentLoaded", function() {
  fetchImgs();
  fetchBreeds();
  sortBreeds();
});

function fetchImgs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => printImg(json))
}

function fetchBreeds(){
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => createBreedsArray(json))
};

function createBreedsArray(json) {
  allBreeds = Object.keys(json.message);
  renderBreeds(allBreeds);
}

function renderBreeds(breeds) {
  const dogBreedsContainer = document.getElementById("dog-breeds");

  breeds.forEach(breed => {
    let li = document.createElement("li");
    li.textContent = breed;
    dogBreedsContainer.appendChild(li);
    li.addEventListener("click", changeColor);
  })

  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", sortBreeds);
};


function printImg(json) {
  let dogImage = json.message

  const dogImageContainer = document.getElementById("dog-image-container");

  for (image of dogImage) {
    const img = document.createElement("img")
    img.src = image;
    dogImageContainer.appendChild(img);
  }};

  function changeColor(e) {
    e.target.style.color = "salmon";
  }

function updateBreeds(breeds) {
  document.getElementById("dog-breeds").innerHTML = "";
  renderBreeds(breeds);
}

function sortBreeds(e) {
  let valueToSort = e.target.value;

  updateBreeds(allBreeds.filter(breed => breed.startsWith(valueToSort)));
}
