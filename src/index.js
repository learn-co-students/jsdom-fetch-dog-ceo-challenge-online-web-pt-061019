console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
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
})

function addImage(imageUrl){
    const newImage = document.createElement('img')
    newImage.src = imageUrl
    const imageCollection = document.getElementById('dog-image-container')
    imageCollection.appendChild(newImage)
}