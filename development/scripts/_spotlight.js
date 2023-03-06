(function($) {

    function spotlightShow(spotlight) {
        spotlight.fadeIn(150);
    }

    function spotlightHide(){
        $('.spotlight').fadeOut(100);
    }


    $('[data-spotlight]').on('click', function(event) {
        event.preventDefault();
        spotlightShow( $($(this).data('spotlight')) );
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
