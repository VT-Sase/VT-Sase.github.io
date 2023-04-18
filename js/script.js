
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

        const owl = $('.owl-carousel');
        
        owl.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items: 1,
            nav: false,
            dots: true
        });
    
        // Custom Navigation to Previous & Next Image in Carousel

        $('.owl-carousel__prev').click(() => {
            owl.trigger('prev.owl.carousel')
        });
    
        $('.owl-carousel__next').click(() => {
            owl.trigger('next.owl.carousel')
        });
    });
}

// Reduces (Does Not 100% Avoid It Though) the Chance of the JavaScript Not 
// Loading the Carousel By the Time of the Initial Page Load
// setTimeout(overrideFunctionality, 3000);
overrideFunctionality();
