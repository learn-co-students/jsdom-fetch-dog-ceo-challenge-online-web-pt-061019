console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => printImg(json))
});

function printImg(json) {
  console.log("Woof");
  console.log(json);
  const dogImageContainer = document.getElementById("dog-image-container");

  for (i = 0; i < json.length;i++) {
    console.log(json[i]);
  }

  // json.forEach(x => {
  //   const img = document.createElement('img')
  //   img.src = `x`
  //   dogImageContainer.appendChild(img);
  // })
}

//
//
// return fetch("https://anapioficeandfire.com/api/books")
//   .then(resp => resp.json())
//   .then(json => renderBooks(json))
