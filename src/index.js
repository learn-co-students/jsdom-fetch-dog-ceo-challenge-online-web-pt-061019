console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() { 
    fetchDogs();
    fetchBreeds();
    filterBreeds();
})


function fetchDogs() {
fetch(imgUrl)
    .then(response => response.json())
    .then(returnObj => showImages(returnObj));
};
function showImages(returnObj) {
    const imageCont = document.querySelector("div#dog-image-container");
    returnObj.message.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '300px';
        imageCont.appendChild(img);
    });
};

function fetchBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => (breedArray = Object.keys(json.message)))
    .then(() => showBreeds(breedArray));
};
function showBreeds(breedList){
    const breedCont = document.querySelector("ul#dog-breeds");
    breedCont.innerHTML = "";
    breedList.forEach(function(breed) {
        const li = document.createElement('li')
        li.innerText = breed;
        breedCont.appendChild(li);

        li.addEventListener('click', function() {
            this.style.color = 'red'
        });
    });    
};
// Challenge 4
// function filterBreeds() {
//     const dropdown = document.querySelector("select#breed-dropdown");
//     dropdown.addEventListener('change', function(e) {
//         const startLetter = e.target.value;
//         const liBreed = document.querySelectorAll('li');
//         liBreed.forEach(breed => {
//             if (breed.innerText.startsWith(startLetter)) {
//                 breed.hidden = false
//             } else {
//                 breed.hidden = true
//             };
//         });
//     });
// };
// use filterBreeds()

function filterBreeds(e) {
    let valueToSort = e.target.value;
    breedCont(breedList.filter(breed => breed.startsWith(valueToSort)));
}
// function filterBreeds() {
//     const dropdown = document.querySelector("select#breed-dropdown");
//     dropdown.addEventListener('change', function(e) {
//         const startLetter = e.target.value;
//         const liBreed = document.querySelectorAll('li');
//         liBreed.forEach(breed => {
//             breed.filter};
//         });
//     });
// Collapse



