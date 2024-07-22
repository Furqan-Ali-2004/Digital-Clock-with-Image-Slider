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

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let period = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Update the HTML elements
  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
  ampm.innerHTML = period;
}, 1000);
