
   // СЛАЙДЕР


   var slideIndex = 1;
   showSlides(slideIndex);

   function plusSlides(n) {
       showSlides(slideIndex += n);
   }

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



       // __________TAB______________




   const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
   const tabsItems = document.querySelectorAll(".tabs__item");

   tabsBtn.forEach(onTabClick);

   function onTabClick(item) {
       item.addEventListener("click", function() {
           let currentBtn = item;
           let tabId = currentBtn.getAttribute("data-tab");
           let currentTab = document.querySelector(tabId);

           if( ! currentBtn.classList.contains('active') ) {
               tabsBtn.forEach(function(item) {
                   item.classList.remove('active');
               });

               tabsItems.forEach(function(item) {
                   item.classList.remove('active');

               });

               currentBtn.classList.add('active');
               currentTab.classList.add('active');
           }
       });
   }

   document.querySelector('.tabs__nav-btn').click();



    var navEl = document.getElementById('nav_btn');;
   navEl.addEventListener('click', function  () {

       // console.log(navEl.style.backgroundImage);
       if (this.style.backgroundImage ==='url("img/01.png")' ) {
            this.style.backgroundImage ='url("img/02.png")';
       }else {
           this.style.backgroundImage ='url("img/01.png")'
       }
       console.log(this.style.backgroundImage);
   });




   // function openImg(imgName) {
   //     var i, x;
   //     x = document.getElementsByClassName("picture");
   //     for (i = 0; i < x.length; i++) {
   //         x[i].style.display = "none";
   //     }
   //     document.getElementById(imgName).style.display = "block";
   // }
