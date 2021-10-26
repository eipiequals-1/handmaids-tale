
var slideIndex = 0;
window.addEventListener("DOMContentLoaded", onStart);

window.smoothScroll = function (target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function onStart() {
    slideshow();
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
