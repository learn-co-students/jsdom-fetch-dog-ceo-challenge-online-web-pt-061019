console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (e) => {
    fetchDogImages()
    fetchDogBreeds()
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
        console.log(json["message"])
        // listBreeds(json["message"])
    })
}

// function listBreeds(json) {
//     const dogBreedsContainer = document.querySelector('ul#dog-breeds')
//     json.forEach((breed) => {
//         const li = document.createElement('li')
//         li.innerText = breed
//         dogBreedsContainer.appendChild(li)
//     })
// }