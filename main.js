let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

var twoofus = document.getElementById("twoofus");

function togglePlay() {
  return twoofus.paused ? twoofus.play() : twoofus.pause();
};


var waves = document.getElementById("waves");

function wavesPlay() {
  return waves.paused ? waves.play() : waves.pause();
};

var snow = document.getElementById("snow");

function snowPlay() {
  return snow.paused ? snow.play() : snow.pause();
};

var trees = document.getElementById("trees");

function treesPlay() {
  return trees.paused ? trees.play() : trees.pause();
};

var trees = document.getElementById("trees");

function windchimesPlay() {
  return windchimes.paused ? windchimes.play() : windchimes.pause();
};
