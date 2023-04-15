// Hamburger Drop-Down Menu Functionality

/*
$(document).ready(function(){
    $("#hamburger").click(function() {
        $(".navbar-hidden").slideToggle(300);
    });
});
*/

// Overriding Default Owl-Carousel Functionality

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 1
    });
});


