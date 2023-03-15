let code5 = document.getElementById('code5')
code5.addEventListener("click", Code5);
function Code5 () {
  document.getElementById('text').hidden = true;
}

const code6 = document.getElementById('code6');
code6.addEventListener("click", Code6);
function Code6 () {
  code6.style.display = 'none'
}

code7.addEventListener("click", () => alert("1"));
code7.removeEventListener("click", () => alert("1"));
code7.onclick = () => alert(2);

let menu = document.getElementById('menu');
let title = menu.querySelector('.title');
title.onclick = function() {
  menu.classList.toggle('open');
};

let hidden = document.querySelector('.hidden__block');
let hiddenBtn = document.querySelector('.block__btn');
hiddenBtn.addEventListener("click", () => {
  hidden.style.display = "none"
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}