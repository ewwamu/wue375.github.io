let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

var myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};


var wow = document.getElementById("wow");

function wowPlay() {
  return wow.paused ? wow.play() : wow.pause();
};

var awooga = document.getElementById("awooga");

function awoogaPlay() {
  return awooga.paused ? awooga.play() : awooga.pause();
};

var rawrxd = document.getElementById("rawrxd");

function rawrxdPlay() {
  return rawrxd.paused ? rawrxd.play() : rawrxd.pause();
};
