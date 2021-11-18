var cHeight = 0

window.addEventListener('load', function () {
  cHeight = document.getElementsByClassName("mySlides")[0].offsetHeight
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  document.getElementsByClassName('slideshow-container')[0].style.height = cHeight + "px"
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  document.getElementsByClassName('slideshow-container')[0].style.height = cHeight + "px"
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
