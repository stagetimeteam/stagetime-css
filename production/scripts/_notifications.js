(function($) {

    $('.header-button--notifications').on('click', function () {
        $('html').toggleClass('notifications-visible');
    });

    $('.notifications__head .top-bar__close').on('click', function () {
        $('html').removeClass('notifications-visible');
    });


    /* click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.notifications, .header-button--notifications').length) {
            $('html').removeClass('notifications-visible');
        }
    });


    /* Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('notifications-visible');
        }
    });



})(jQuery);
