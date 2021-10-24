
var slideIndex = 0;
window.addEventListener("DOMContentLoaded", onStart);

function onStart() {
    /*slideshow();
    var buttons = document.getElementsByClassName("btns");
    for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        btn.addEventListener("click", onNavBarClick(btn));
    }*/
    //window.scrollTo({top: 550, behavior: "smooth"})
}

function onNavBarClick(btn) {
    var innerHtml = btn.innerHtml;
    if (innerHtml === "ABOUT") {
        window.scrollTo({ top: document.getElementById("about").getBoundingClientRect().x, behavior: "smooth" });
        alert("about clicked");
    }
}

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
