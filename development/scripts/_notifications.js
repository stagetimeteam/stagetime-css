(function($) {

    /* desktop handler */
    $('.header__item:nth-child(2)').on('click', function () {
        $('html').toggleClass('notifications-visible');
    });

    /* mobile handler */
    $('.header__notifications-handler').on('click', function () {
        $('html').toggleClass('notifications-visible');
    });

    /* cross button */
    $('.notifications__head .top-bar__close').on('click', function () {
        $('html').removeClass('notifications-visible');
    });


    /* click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.notifications, .header__item:nth-child(2), .header__notifications-handler').length) {
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
