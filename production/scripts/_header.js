(function($) {

    $('.header__item:nth-child(3)').on('click', function () {
        $('html').toggleClass('notifications-visible');
    });

    $('.header__notifications-handler').on('click', function () {
        $('html').toggleClass('notifications-visible');
    });

    /* click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.notifications, .header__item:nth-child(3), .header__notifications-handler').length) {
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
