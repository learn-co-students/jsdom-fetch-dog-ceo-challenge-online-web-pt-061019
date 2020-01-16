console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let breeds = []

document.addEventListener("DOMContentLoaded", function(){
  fetchImg()
  fetchBreeds()
});

function fetchImg(){
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => renderImg(json))
}

function renderImg(json){
  const imgSrc = json.message

  for(let link of imgSrc){
    const img = document.createElement("img")
    img.src = link
    img.alt = "dog ceo image"
    document.querySelector('#dog-image-container').appendChild(img)
  }
}

function fetchBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(response => response.json())
    .then(res => {
       breeds = Object.keys(res.message)
       renderBreeds(breeds)
    })
    // .then(json => renderBreeds(json))
}

function renderBreeds(breeds){
  let ul = document.querySelector('#dog-breeds')
  removeChildren(ul)
  for(breed of breeds){
    let e = document.createElement("li")
    e.textContent = breed
    document.querySelector('#dog-breeds').appendChild(e)
    e.addEventListener('click', changeColor)
  }
  filterBreeds(breeds)
}

function changeColor(e){
  e.target.style.color = 'orange'
}

function filterBreeds(breeds){
  let findLetter = document.querySelector('#breed-dropdown')
  findLetter.addEventListener('change', function(e){
    selectBreedLetter(e.target.value)
  })
}

function selectBreedLetter(letter){
  renderBreeds(breeds.filter(breed => breed.startsWith(letter)))
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}
