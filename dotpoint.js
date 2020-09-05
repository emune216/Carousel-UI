const dot1 = document.querySelector(".dot1");
dot2 = document.querySelector(".dot2");
dot3 = document.querySelector(".dot3");
dot4 = document.querySelector(".dot4");
dot5 = document.querySelector(".dot5");

function dotClick1() {
  photo.src = "images/1.jpg";
  num = 1;
}

function dotClick2() {
  photo.src = "images/2.jpg";
  num = 2;
}

function dotClick3() {
  photo.src = "images/3.jpg";
  num = 3;
}

function dotClick4() {
  photo.src = "images/4.jpg";
  num = 4;
}

function dotClick5() {
  photo.src = "images/5.jpg";
  num = 5;
}

function init() {
  dot1.addEventListener("click", dotClick1);
  dot2.addEventListener("click", dotClick2);
  dot3.addEventListener("click", dotClick3);
  dot4.addEventListener("click", dotClick4);
  dot5.addEventListener("click", dotClick5);
}
init();
