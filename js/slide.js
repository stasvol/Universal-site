
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

var elSlide = document.querySelectorAll ('.bg_slide1');
var sectionBackground = document.getElementById('bg_section');


console.log(elSlide);
elSlide.forEach(function (el) {
    el.addEventListener('click', function () {

        // const attr = elSlide.getAttribute('src');
        // sectionBackground.style.backgroundImage = `url('${attr}')`;
        sectionBackground.style.backgroundImage = "url('" + el.getAttribute('src') + "')";


    } );

});












































// document.body.style.backgroundImage = "url('img_tree.png')";
//
// function bg() {
//
//     var imgCount = 3;
//     var dir = 'http://local.statamic.com/_themes/img/';
//     // I changed your random generator        Я поменял твой генератор случайных
//     //floor: helps getting a random integer   этаж: помогает получить случайное целое число
//     var randomCount = (Math.floor(Math.random() * imgCount));
//     // I changed your array to the literal notation. The literal notation is preferred. Я изменил ваш массив на буквальное обозначение. Буквальное обозначение является предпочтительным.
//     var images = ['001.png', '002.png', '003.png'];
//     // I changed this section to just define the style attribute the best way I know how.  Я изменил этот раздел, чтобы просто определить атрибут стиля как можно лучше.
//     document.getElementById('banner').setAttribute("style", "background-image: url(" + dir + images[randomCount] + ");background-repeat: no-repeat;background-size: 388px 388px");
// }
// // Don't forget to run the function instead of just defining it.   Не забудьте запустить функцию, а не просто определить ее.
// bg();
