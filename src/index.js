console.log('%c HI', 'color: firebrick')

const imgUrl ='https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() { 
    fetchImg();
    fetchBreeds(); 
})


function fetchImg() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(imgsReturned => renderImages(imgsReturned)); 
}; 

function renderImages(imgsReturned) {
    const imageContainer = document.querySelector("div#dog-image-container") 
    imgsReturned.message.forEach( image => {
        const img = document.createElement('img'); 
        img.src = image;
        img.style.width = '300px'; 
        imageContainer.appendChild(img);
    }); 
}; 

function fetchBreeds() {
    fetch(breedUrl) 
        .then(response => response.json())
        .then(json => (breedsReturned = Object.keys(json.message)))
        .then(() => renderBreeds(breedsReturned));
}; 

function renderBreeds(breedsReturned) {
    const breedUl = document.querySelector("ul#dog-breeds")
    breedUl.innerHTML = ""; 
    breedsReturned.forEach( breed => { 
        const breedLi =  document.createElement('li')
        breedLi.innerText = breed; 
        breedUl.appendChild(breedLi);    

        breedLi.addEventListener('click', function() {
            this.style.color = 'pink'
        })
    }); 
}; 




