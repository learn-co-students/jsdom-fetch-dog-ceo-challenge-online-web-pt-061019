// console.log('%c HI', 'color: firebrick')

//wait for the DOM to render in the browser
document.addEventListener('DOMContentLoaded', () => {
  // allBreeds is a variable for the dog breeds so we don't have to fetch each time we need the data
  let allBreeds = []

  //api endpoints
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  // DOM nodes for attaching even listeners
  const dogImgContainer = document.getElementById('dog-img-container')
  const dogBreedUl = document.getElementById('dog-breeds')
  const breedDropdown = document.getElementById('breed-dropdown')

  // listen for click on the li
  dogBreedUl.addEventListener('click', function(event){
    // event.target will be node that was clicked
    event.target.style.color = 'green'
  })

  breedDropdown.addEventListener('change', /*function*/(event) => {
    const letter = event.target.value // 'a','b','c','d'
    // filter out the dogs whose name don't match the selected letter
    const filteredBreeds = allBreeds.filter((breed) => breed.startWith(letter))
    // set the innerHTML of the ul using our render helper function
    dogBreedUl.innerHTML = createDogList(filteredBreeds)
  })

  // fetch will default to sending an HTTP GET request
  fetch(imgUrl, { method: 'GET'})
  // the initial fetch returns a promise with a response object inside of it
  .then( (/*function*/response) => {
    console.log(response)
    // .then takes a callback and passes the return value from the previous promise to it  
    if (response.ok) { //if the HTTP status code is < 400
        //respond.json() returns another promise
        //the another .then will get the value 
        return response.json() //return the parsed json as a promise
      }
    })
    .then( (/*function*/dogImgData) => {
      dogImgData.message.forEach(function(imgUrl) {
        dogImgContainer.innerHTML += `<img src="${imgUrl}">`
      })
      const dogImgString = dogImgData.message.map((imgUrl) => {
        return `<img src="${imgUrl}">`
      })
    })



 fetch(breedUrl, {method: 'GET'})
    .then((resp) => resp.json())
    // the return value is our parsed json - the breedData object
    .then((breedData) => { //breedData is an object whose keys are breed names
      // set our allBreeds variable so we can hold on to the data in JS instead of fetching each time
      allBreeds = Object.keys(breedData.message)
      console.log(allBreeds)  //allBreeds is an array of dog breeds
      //use helper function to get dog breeds on the page as list item
      dogBreedUl.innerHTML = createDogList(allBreeds)
    }) 
 })

 function createDogList(dogBreedArray) {
  const dogListStringArray = dogBreedArray.map(function(breed){
    // return the string below to our map function callback
    return `<li>${breed}</li>`
  })
  // join so we don't have commas on the page
  return dogListStringArray.join('')
 }
 