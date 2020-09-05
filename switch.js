const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const photo = document.getElementById("photo");

// 밑에 두 함수의 이벤트결과로 나온 숫자를 src에 넣어서 숫자에 맞는 이미지 출력
function switchImg(imgNum) {
  photo.src = "images/" + imgNum + ".jpg";
}

var num = 1;

function forwardImg() {
  if (num < 5) {
    num++;
  } else {
    num = 1;
  }
  switchImg(num);
}

function backwardImg() {
  if (num <= 1) {
    num = 5;
  } else {
    num--;
  }
  switchImg(num);
}

function init() {
  rightBtn.addEventListener("click", forwardImg);
  leftBtn.addEventListener("click", backwardImg);
}

init();
