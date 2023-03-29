//Hamburger Drop-Down Menu Functionality

$(document).ready(function(){
    $("#hamburger").click(function() {
        $(".navbar-hidden").slideToggle(300);
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        height: 100,
        items: 1
    });
});
