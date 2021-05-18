(function($) {

    $('.profile__handler').on('click', function () {
        $(this).parent('.profile').toggleClass('profile--expanded');
    });


    /* hide profile dropdown by overlay click ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.profile').length) {
            $('.profile').removeClass('profile--expanded');
        }
    });


    /* hide profile dropdown by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.profile').removeClass('profile--expanded');
        }
    });

})(jQuery);
