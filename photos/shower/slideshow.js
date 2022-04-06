let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide = slides[slideIndex-1]
  img = document.getElementById("img")
  console.log("img", img)
  // console.log("slide", slide)
  // console.log("style", slide.style)
  // console.log("width", slide.style.width),
  // console.log("height", slide.style.height),
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

