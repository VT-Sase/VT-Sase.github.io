
// Needed For Home index.html Page:
function overrideFunctionality()
{
    // Overriding Default Hamburger Drop-Down Menu Functionality (Mobile)
    $(document).ready(function(){
        $("#hamburger").click(function() {
            $(".navbar-hidden").slideToggle(300);
        });
    });

    // Overriding Default Owl-Carousel Functionality (If Applicable)
    $(document).ready(function() {

        const owl = $('.owl-carousel');
        
        // No need to override if there is no class instance of this
        if (owl != undefined && owl != null)
        {
            owl.owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                items: 1,
                nav: false,
                dots: true,
                navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
            });
    
            // Custom Navigation to Fast-Forward Previous, Previous, Next, Fast-Forward Next Image in Carousel
            const fastBackwordForwardDuration = 5;
    
            $('.owl-carousel__fast_forward_prev').click(() => {
                for (let i = 0; i < fastBackwordForwardDuration; i++)
                {
                    owl.trigger('prev.owl.carousel');
                }
            });
    
            $('.owl-carousel__prev').click(() => {
                owl.trigger('prev.owl.carousel');
            });
        
            $('.owl-carousel__next').click(() => {
                owl.trigger('next.owl.carousel');
            });
    
            $('.owl-carousel__fast_forward_next').click(() => {
                for (let i = 0; i < fastBackwordForwardDuration; i++)
                {
                    owl.trigger('next.owl.carousel');
                }
            });
        }
    });
}

// Reduces (Does Not 100% Avoid It Though) the Chance of the JavaScript Not 
// Loading the Carousel By the Time of the Initial Page Load
// setTimeout(overrideFunctionality, 3000);
overrideFunctionality();
