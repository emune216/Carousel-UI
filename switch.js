const leftBtn = document.querySelector(".leftArrow");
const rightBtn = document.querySelector(".rightArrow");
const photo = document.querySelector(".photo");

function switchImg(imgNum) {
  photo.src = "images/" + imgNum + ".jpg";
}
// 밑에 두 함수의 이벤트결과로 나온 숫자를 src에 넣어서 숫자에 맞는 이미지 출력

function forwardImg() {
  var num = 1;
  num++;
  switchImg(num);
}
/* '오른쪽 버튼' 이벤트로 클릭하면
   1씩 커지는데 5보다 커지면 1로 돌아가서 1씩 커지는것 반복하는 함수를 만드려는데
   일단 커지는것부터 하려는데 숫자가 한번만 커집니다. 
   그리고 css 적용도 안되네요 무엇이 문제인지 못찾겠습니다..
*/
function backwardImg() {
  switchImg(num);
}
/* '왼쪽 버튼' 이벤트로 
  클릭하면 1씩 작아지는데 1보다 작아지면 5로 돌아가서 1씩 작아지는것 반복하게 만들예정
*/
function init() {
  rightBtn.addEventListener("click", forwardImg);
  leftBtn.addEventListener("click", backwardImg);
}

init();
