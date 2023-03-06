(function($) {

    function spotlightShow(spotlight, underspotlight) {
        spotlight.fadeIn(150);
        underspotlight.addClass('under-the-spotlight');
    }

    function spotlightHide(){
        $('.spotlight').fadeOut(150, function () {
            $('.under-the-spotlight').removeClass('under-the-spotlight'); /* remove .under-the-spotlight only when animation is over */
        });

    }


    $('[data-spotlight]').on('click', function(event) {
        event.preventDefault();
        console.log( $($(this).data('spotlight')), $($(this).data('underspotlight')) );
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
