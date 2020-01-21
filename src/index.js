const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

// Challenge #1
function fetchImgs() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(imgsObj => addImages(imgsObj))
}

function addImages(imgsObj) {
  const imageContainer = document.querySelector("div#dog-image-container")

  imgsObj.message.forEach(image => {
      const img = document.createElement("img")
      img.src = image
      img.style.width = "25%"
      imageContainer.appendChild(img)
  })
}

// Challenge #2
function fetchBreeds() {
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => addBreeds(breeds = Object.keys(json.message)))
}

function addBreeds(breeds) {
  const breedsContainer = document.querySelector("ul#dog-breeds")
  breedsContainer.innerHTML = ""

  breeds.forEach(function(breed) {
    const li = document.createElement("li")
    li.innerText = breed
    breedsContainer.appendChild(li)

    // Challenge #3
    li.addEventListener("click", function() {
      this.style.color = "blue"
    })
  })    
}

// Challenge #4
function filterBreeds() {
  const dropdown = document.querySelector("select#breed-dropdown")

  dropdown.addEventListener("change", (e) => {
    const startLetter = e.target.value
    const liBreed = document.querySelectorAll("li")
    liBreed.forEach(breed => {
      if(breed.innerText.startsWith(startLetter)) {
        breed.hidden = false
      }
      else {
        breed.hidden = true
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", () => { 
    fetchImgs()
    fetchBreeds()
    filterBreeds()
})