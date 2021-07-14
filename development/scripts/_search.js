(function($) {

    $('.search__widget').on('focus', function () {
        $('html').addClass('search-expanded');
    });


    /* hide popup by click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.search, .header__search-handler').length) {
            $('html').removeClass('search-expanded');
        }
    });


    /* hide popup by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('search-expanded');
        }
    });


    /* mobile */

    $('.header__search-handler').on('click', function () {
        $('html').addClass('search-expanded');
    });

    $('.search__close').on('click', function() {
        $('html').removeClass('search-expanded');
    });




})(jQuery);
