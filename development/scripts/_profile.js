(function($) {

    $('.profile-button').on('click', function () {
        $('html').toggleClass('profile-visible');
    });

    $('.header__profile-handler').on('click', function () {
        $('html').toggleClass('profile-visible');
    });

    $('.profile__head .top-bar__close').on('click', function () {
        $('html').removeClass('profile-visible');
    });





    /* hide profile dropdown by click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.profile, .profile-button, .header__profile-handler').length) {
            $('html').removeClass('profile-visible');
        }
    });


    /* hide profile dropdown by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('profile-visible');
        }
    });

})(jQuery);
