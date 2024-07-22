let slide = document.querySelectorAll(".slide");
let current = 0;

function cls() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
}

// For Next Image

function next() {
  cls();
  if (current === slide.length - 1) current = -1;
  current++;

  slide[current].style.display = "block";
  slide[current].style.opacity = 0.4;

  let x = 0.4;
  let intX = setInterval(() => {
    x += 0.1;
    slide[current].style.opacity = x;

    if (x >= 1) {
      clearInterval(intX);
      x = 0.4;
    }
  }, 20);
}

let arrowR = document.querySelector(".r");

arrowR.addEventListener("click", () => {
  next();
});

// For Previous Image

function previous() {
  cls();
  if (current === 0) current = slide.length;
  current--;

  slide[current].style.display = "block";
  slide[current].style.opacity = 0.4;

  let x = 0.4;
  let intX = setInterval(() => {
    x += 0.1;
    slide[current].style.opacity = x;

    if (x >= 1) {
      clearInterval(intX);
      x = 0.4;
    }
  }, 20);
}

function start() {
  cls();
  slide[current].style.display = "block";
}

start();

let arrowL = document.querySelector(".l");

arrowL.addEventListener("click", () => {
  previous();
});

// Clock Code

let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
