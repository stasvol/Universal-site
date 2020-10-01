
//         SLIDE 2





    var counter = 1;
showGallery(counter);

function plusGallery(n) {
    showGallery(counter += n);
}

function currentGallery(n) {
    showGallery(counter = n);
}

function showGallery(n) {
    var i;
    var slide = document.getElementsByClassName("mySlides1");
    var dot = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slide.length) {counter = 1}
    if (n < 1) {counter = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slide[counter-1].style.display = "block";
    dot[counter-1].className += " active";
    // captionText.innerHTML = dot[counter-1].alt;
}

