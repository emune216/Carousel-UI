const dot = document.querySelector(".dot");
const dotNum = document.querySelectorAll(".dot");

function dotClick() {
  switch (this) {
    case dotNum[0]:
      photo.src = "images/1.jpg";
      num = 1;
      break;
    case dotNum[1]:
      photo.src = "images/2.jpg";
      num = 2;
      break;
    case dotNum[2]:
      photo.src = "images/3.jpg";
      num = 3;
      break;
    case dotNum[3]:
      photo.src = "images/4.jpg";
      num = 4;
      break;
    case dotNum[4]:
      photo.src = "images/5.jpg";
      num = 5;
      break;
  }
}

function init() {
  dotNum[0].addEventListener("click", dotClick);
  dotNum[1].addEventListener("click", dotClick);
  dotNum[2].addEventListener("click", dotClick);
  dotNum[3].addEventListener("click", dotClick);
  dotNum[4].addEventListener("click", dotClick);
}

init();
