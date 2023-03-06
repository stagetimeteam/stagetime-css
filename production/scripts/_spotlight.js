(function($) {

    function spotlightShow(spotlight, underspotlight) {
        spotlight.addClass('spotlight--current');
        underspotlight.addClass('under-the-spotlight');
    }

    function spotlightHide() {
        $('.spotlight').removeClass('spotlight--current');
        $('.under-the-spotlight').removeClass('under-the-spotlight');
    }


    $('[data-spotlight]').on('click', function(event) {
        event.preventDefault();
        spotlightShow( $($(this).data('spotlight')), $($(this).data('underspotlight')) );
    });

    $('.spotlight__close').on('click', function(event) {
        event.preventDefault();
        spotlightHide();
    });

    $('.spotlight__curtain').on('click', function(event) {
        event.preventDefault();
        spotlightHide();
    });


    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            spotlightHide();
        }
    });

})(jQuery);
