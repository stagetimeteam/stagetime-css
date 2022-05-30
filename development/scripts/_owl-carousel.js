(function($) {

    if(desktopMediaQuery.matches) {
        $('.owl-carousel--profile-media').owlCarousel({
            items: 4,
            slideBy: 3,
            margin: 56,
            nav: true,
            dots: false,
            loop: false
        });
    }




})(jQuery);
