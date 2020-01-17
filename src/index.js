console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
  //images
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const imgArray = json.message;
    const div = document.querySelector("div#dog-image-container");
    imgArray.forEach(pic => {
      // console.log(pic)
      const img = document.createElement('img');
      img.setAttribute("src", `${pic}`);
      img.setAttribute("height", "100")
      div.appendChild(img);
    })

  })

  //breeds
  let breeds = [];
  let breedsArr = [];
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    breeds = json.message;
    const ul = document.querySelector("ul#dog-breeds");
    // console.log(breeds)
    breedsArr = Object.keys(breeds);

    breedsArr.forEach(breed => {
      createBreed(breed);
      // const li = document.createElement('li');
      // li.innerText = breed;
      // li.setAttribute("style", "color: black");
      // ul.appendChild(li);
    });

    //for accessing the things inside:
    //this makes it an array of arrays, which allows you to access things
    // const breedTypes = Object.entries(breeds);
    // breedTypes.forEach(breed => {
    //   //you can check here if they have a length of more than one
    //   //and then iterate over it, etc.
    // });

  })

  //change color on click
  const ul = document.querySelector("ul#dog-breeds");
  ul.addEventListener("click", (e, li) => {
    if (e.target.style.color == "black") {
      e.target.style.color = "teal"
    } else {
      e.target.style.color = "black"
    };
  });

  //sorting by breed
  const breedSelector = document.querySelector("#breed-dropdown");
  breedSelector.addEventListener("input", (e) => {
    let value = breedSelector.value;
    //get rid of older list
    deleteOtherBreeds();
    breedsArr.forEach(breed => {
      if (breed.startsWith(value)) {
        createBreed(breed);
      }
    })
  });



});

//helper functions

function createBreed(breed) {
  const li = document.createElement('li');
  const ul = document.querySelector("#dog-breeds");

  li.innerText = breed;
  li.setAttribute("style", "color: black");
  ul.appendChild(li);
}

function deleteOtherBreeds() {
  const breedList = document.querySelector("#dog-breeds");
  let child = breedList.lastElementChild;
  while (child) {
    breedList.removeChild(child);
    child = breedList.lastElementChild;
  }
}
