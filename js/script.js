//Hamburger Drop-Down Menu Functionality

$(document).ready(function(){
    $("#hamburger").click(function() {
        $(".navbar-hidden").slideToggle(300);
    });
});
