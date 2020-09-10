const dotLi = document.querySelectorAll(".dot");

function dotClick() {
  for (var i = 0; i < dotLi.length; i++) {
    if (this == dotLi[i]) {
      i += 1;
      photo.src = "images/" + i + ".jpg";
      num = i;
    }
  }
}

function init() {
  dotLi[0].addEventListener("click", dotClick);
  dotLi[1].addEventListener("click", dotClick);
  dotLi[2].addEventListener("click", dotClick);
  dotLi[3].addEventListener("click", dotClick);
  dotLi[4].addEventListener("click", dotClick);
}

init();
