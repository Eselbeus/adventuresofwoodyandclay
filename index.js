let img;

window.addEventListener("DOMContentLoaded", e => {
  console.log("wheeeeeeeee")

  img = document.getElementById("image__comic");
  console.log(img)
  let episodeNo = img.src.slice(-5, -4);
  console.log(episodeNo)
  let episodeNext = parseInt(episodeNo)

  img.addEventListener('click', e => {
    episodeNext++;
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
    console.log(img)
  })
});
