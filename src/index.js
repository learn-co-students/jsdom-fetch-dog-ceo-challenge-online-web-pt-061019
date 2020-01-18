console.log('%c HI', 'color: firebrick')

// Page load
document.addEventListener("DOMContentLoaded", () => {
    fetchImages();
    fetchBreeds();
    filterBreeds();
})

//Challenge 1
function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(response => {
            return response.json()
        })
        .then(dogImages => {
            dogImages.message.forEach(image => {
                addImage(image)
            });
        })
}

function addImage(imageUrl) {
    const newImage = document.createElement('img')
    newImage.src = imageUrl
    newImage.style.width = '300px';
    const imageCollection = document.getElementById('dog-image-container')
    imageCollection.appendChild(newImage)
} 

// Challenge 2

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' //URL of all breed
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => (breedsArray = Object.keys(json.message)))
    // Object.keys(), the return value is an Array containing all of the keys at the top level of the Object
    .then(() => showBreeds(breedsArray));
}

function showBreeds(breedList) {
    const breedListObject = document.getElementById("dog-breeds") //html list
    breedListObject.innerHTML = "";

    breedList.forEach(function(breed) {
        const li = document.createElement('li')
        li.innerText = breed;
        breedListObject.appendChild(li);

// Challenge 3

        li.addEventListener('click', function() {
            this.style.color =  'firebrick'
            // this: A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
        });
    });
};

// Challenge 4

function filterBreeds() {
    const breedDropdownObject = document.getElementById("breed-dropdown") //html dropdown
    breedDropdownObject.addEventListener('change', function(l) {
        const startLetter = l.target.value
        const listBreed = document.querySelectorAll('li');
        listBreed.forEach(breed => {
            if (breed.innerText.startsWith(startLetter)) {
                breed.hidden = false
            } else { 
                breed.hidden = true
            };
        });
    });
};