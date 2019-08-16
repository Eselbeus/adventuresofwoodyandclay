let img;
let next;
let previous;
let ep1;
let ep11;
let ep21;
let ep31;
let ep41;

window.addEventListener("DOMContentLoaded", e => {

  img = document.getElementById("image__comic");
  let episodeNo = img.src.slice(-5, -4);
  let episodeNext = parseInt(episodeNo);

  next = document.getElementsByClassName("component__button--next")[0];
  previous = document.getElementsByClassName("component__button--previous")[0];

  ep1 = document.getElementsByClassName('component__link--ep1')[0];
  ep11 = document.getElementsByClassName('component__link--ep11')[0];
  ep21 = document.getElementsByClassName('component__link--ep21')[0];
  ep31 = document.getElementsByClassName('component__link--ep31')[0];
  ep41 = document.getElementsByClassName('component__link--ep41')[0];

  img.addEventListener('click', e => {
    if (episodeNext !== 50){
      episodeNext++;
    }
    else if (episodeNext === 50){
      episodeNext = 1;
    }
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

  next.addEventListener('click', e => {
    if (episodeNext !== 50){
      episodeNext++;
    }
    else if (episodeNext === 50){
      episodeNext = 1;
    }
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

  previous.addEventListener('click', e => {
    if (episodeNext !== 1){
      episodeNext--;
    }
    else if (episodeNext === 1){
      episodeNext = 50;
    }
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

  ep1.addEventListener('click', e => {
    episodeNext = 1;
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

  ep11.addEventListener('click', e => {
    episodeNext = 11;
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

  ep21.addEventListener('click', e => {
    episodeNext = 21;
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

  ep31.addEventListener('click', e => {
    episodeNext = 31;
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

  ep41.addEventListener('click', e => {
    episodeNext = 41;
    img.src = `./images/Catan_World_ep${episodeNext}.jpg`;
  })

});
