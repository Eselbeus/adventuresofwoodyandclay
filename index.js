let img;

window.addEventListener("DOMContentLoaded", e => {
  console.log("wheeeeeeeee")

  img = document.getElementById("image__comic");
  console.log(img)
  let episodeNo = img.src.slice(-5, -4);
  console.log(episodeNo)
  let episodeNext = parseInt(episodeNo)

  img.addEventListener('click', e => {
    if (episodeNext !== 20){
      episodeNext++;
    }
    else if (episodeNext === 20){
      episodeNext = 1;
    }
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
    console.log(img)
  })
});
