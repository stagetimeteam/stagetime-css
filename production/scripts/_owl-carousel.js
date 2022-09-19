(function ($) {

    if (desktopMediaQuery.matches) {

        /* Performer profile media */
        var owlProjectsMedia = $('.owl-carousel--profile-media').owlCarousel({
            items: 4,
            slideBy: 3,
            margin: 56,
            nav: true,
            dots: false,
            loop: false
        });

        owlProjectsMedia.each(function () {
            $(this).on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaX > 0) {
                    $(this).trigger('next.owl');
                } else {
                    $(this).trigger('prev.owl');
                }
                e.preventDefault();
            });
        });



        /* Performer profile media */
        var owlFullProjectsMedia = $('.owl-carousel--full-profile-media').owlCarousel({
            items: 3,
            slideBy: 2,
            margin: 36,
            nav: true,
            dots: false,
            loop: false
        });

        owlFullProjectsMedia.each(function () {
            $(this).on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaX > 0) {
                    $(this).trigger('next.owl');
                } else {
                    $(this).trigger('prev.owl');
                }
                e.preventDefault();
            });
        });


    }



    $('.owl-carousel--profile-projects').owlCarousel({
        slideBy: 1,
        smartSpeed: 500,
        dots: false,
        loop: false,
        responsive: {
            0: {
                margin: 0,
                nav: false,
                autoWidth: false,
                items: 1
            },
            768: {
                margin: 25,
                nav: true,
                autoWidth: true,
            }
        }
    });


})(jQuery);
