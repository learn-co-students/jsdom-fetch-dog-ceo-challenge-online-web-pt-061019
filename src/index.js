// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (e) => {
    fetchDogImages()
    fetchDogBreeds()
    changeColor()
})

// Add images
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

function fetchDogImages() {
    return fetch(imgUrl)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        addImages(json["message"])
    })
} 

function addImages(json) {
    const dogImgContainer = document.querySelector('div#dog-image-container')
    json.forEach((image) => {
        const img = document.createElement('img')
        img.setAttribute('src', image)
        dogImgContainer.appendChild(img)
    })
}

// Add breeds list
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogBreeds() {
    return fetch(breedUrl)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        listBreeds(Object.keys(json["message"]))
        filterBreeds(Object.keys(json["message"]))
    })
}

function listBreeds(json) {
    const dogBreedsContainer = document.querySelector('ul#dog-breeds')
    json.forEach((breed) => {
        const li = document.createElement('li')
        li.innerText = breed
        dogBreedsContainer.appendChild(li)
    })
}

// Change font color on click
function changeColor() {
    const ul = document.querySelector('ul#dog-breeds')
    ul.addEventListener('click', (e) => {
        e.target.style.color = 'lightgreen'
    })
}

// Filter 
function filterBreeds(json) {
    const dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change', (e) => {
        const selectedLetter = e.target.value 
        let filteredBreeds = json.filter((breed) => {
            return breed.startsWith(selectedLetter)
        })
        updateBreeds(filteredBreeds)
    })
}

function updateBreeds(breeds) {
    const ul = document.querySelector('ul#dog-breeds')
    removeChildren(ul)
    listBreeds(breeds)
}

function removeChildren(ul) {
    const newUl = document.querySelector('ul#dog-breeds')
    while (newUl.firstChild) {
        newUl.removeChild(newUl.firstChild)
    }
}