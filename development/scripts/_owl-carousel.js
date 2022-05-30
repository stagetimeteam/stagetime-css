(function($) {

    if(desktopMediaQuery.matches) {
        $('.owl-carousel--profile-media').owlCarousel({
            items: 5,
            nav: true,
            loop: false
        });
    }




})(jQuery);
