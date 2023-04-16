
// Needed For Home index.html Page:
function overrideFunctionality()
{
    // Overriding Default Hamburger Drop-Down Menu Functionality (Mobile)
    $(document).ready(function(){
        $("#hamburger").click(function() {
            $(".navbar-hidden").slideToggle(300);
        });
    });

    // Overriding Default Owl-Carousel Functionality
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            items: 1
        });
    });
}

// Reduces (Does Not 100% Avoid It Though) the Chance of the JavaScript Not 
// Loading the Carousel By the Time of the Initial Page Load
setTimeout(overrideFunctionality, 1000);
