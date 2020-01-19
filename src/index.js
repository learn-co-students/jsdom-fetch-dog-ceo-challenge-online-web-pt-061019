console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() { 
    fetchDogs();
    fetchBreeds();
    // filterBreeds(); ->no parameters; use filter()
})

// Challenge 1
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

// Challenge 2
function fetchBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => (breedArray = Object.keys(json.message)))
    
            // Object.keys(), the return value is an Array containing all of the keys at the top level of the Object
    .then(() => showBreeds(breedArray));
 
};

function showBreeds(breedList){
    const breedCont = document.querySelector("ul#dog-breeds");
    breedCont.innerHTML = "";

    breedList.forEach(function(breed) {
        const li = document.createElement('li')
        li.innerText = breed;
        breedCont.appendChild(li);

        // Challenge 3 - Change li color on click
        li.addEventListener('click', function() {
            this.style.color = 'red'
                // this: A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
        });
    });
    filterBreeds(breedList); //using filter()

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

// use filter() for Challenge 4
function filterBreeds(breedList) {
    const dropdown = document.querySelector("select#breed-dropdown");
    dropdown.addEventListener('change', function(e) {
        const startLetter = e.target.value;
        const liBreed = document.querySelectorAll('li')
        let filterLiBreed = breedList.filter((b) => {
            return b.startsWith(startLetter)    
        });
        // forEach
        liBreed.forEach(breed => {
            if (filterLiBreed.includes(breed.innerText)) {
                breed.hidden = false
            } else {
                breed.hidden = true
            };          
        });
        // use helper function // not working
        // sortedLi(filterLiBreed) 
    });
};

// not working
function sortedLi(breeds) {
    const originalUl = document.querySelector('#dog-breeds')
    return showBreeds(breeds)
}
