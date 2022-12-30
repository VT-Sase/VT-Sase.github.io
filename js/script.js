
$(document).ready(function(){
    $("#hamburger").click(function() {
        $(".navbar-hidden").slideToggle(300);
    });

    // $(".owl-carousel").owlCarousel({
    //     items: 1,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     loop: true
    // });
});
  

// var images = ["/img/slideshow/6.jpg", "/img/slideshow/7.jpg", "/img/slideshow/2.jpg", "/img/slideshow/4.jpg", "/img/slideshow/3.jpg", "/img/slideshow/6.jpg", "/img/slideshow/1.jpg", "/img/slideshow/5.jpg"];
// var i = 1;
// setInterval(function(){
//     var slideshow = document.querySelector(".slideshow");

//     slideshow.style.backgroundImage = "url(" + images[i] + ")";
//     i = i + 1;
//     if (i == images.length) {
//       i =  0;
//     }

// }, 6000);
