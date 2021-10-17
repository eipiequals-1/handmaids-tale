
var slideIndex = 0;
window.addEventListener("DOMContentLoaded", slideshow);

function slideshow() {
    var i;
    var slides = document.getElementsByClassName("slideImages");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
	slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(slideshow, 6000);
}
