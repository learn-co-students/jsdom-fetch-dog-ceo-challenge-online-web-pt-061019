console.log('%c Woof', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

let breeds = []

document.addEventListener("DOMContentLoaded", function() {
  console.log("Start");
  fetchImgs();
  fetchBreeds();
});

function fetchImgs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => printImg(json))
}

function fetchBreeds(){
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => createBreedsArray(json))
};

function createBreedsArray(json) {
  allBreeds = Object.keys(json.message);
  renderBreeds(allBreeds);
}



function renderBreeds(breeds) {
  console.log("renderBreeds. Woof!!");

  const dogBreedsContainer = document.getElementById("dog-breeds");

  breeds.forEach(breed => {
    let li = document.createElement("li");
    li.textContent = breed;
    dogBreedsContainer.appendChild(li);
  })
};


function printImg(json) {
  console.log("Woof!!");
  // console.log(json);
  // console.log(json.message.length)

  let dogImage = json.message

  const dogImageContainer = document.getElementById("dog-image-container");

  for (image of dogImage) {
    const img = document.createElement("img")
    img.src = image;
    dogImageContainer.appendChild(img);
  }};

//
// let breeds = [];
// const dogBreedsContainer = document.getElementById("dog-breeds");
//
// document.addEventListener("DOMContentLoaded", function(){
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//   return fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(json => printImg(json))
// });
//
// function printImg(json) {
//   console.log("Woof");
//   // console.log(json);
//   // console.log(json.message.length)
//
//   let dogImage = json.message
//
//   const dogImageContainer = document.getElementById("dog-image-container");
//
//   for (image of dogImage) {
//     const img = document.createElement("img")
//     img.src = image;
//     dogImageContainer.appendChild(img);
//   }
//
// // #2
//
// function fetchBreeds(){
//   const breedUrl = "https://dog.ceo/api/breeds/list/all";
//   return fetch(breedUrl)
//     .then(resp => resp.json())
//     .then(json => createBreedsArray(json))
// };
//
// function createBreedsArray(json) {
//   allBreeds = Object.keys(json.message);
//   renderBreeds(allBreeds);
// }
//
// function renderBreeds(json) {
//   console.log("Woof!!");
//
//   breeds.forEach(breed => {
//     let li = document.createElement("li");
//     li.textContent = breed;
//     dogBreedsContainer.appendChild(li);
//
//   })
//
//   //
//   // for (breed of breeds) {
//   //   const li = document.createElement("li");
//   //   li.textContent = breed;
//   //   dogBreedsContainer.appendChild(li);
//   // }
//
// }
//
// }
