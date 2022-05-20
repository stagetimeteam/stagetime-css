(function($) {

    $('.search__widget').on('focus', function () {
        $('html').addClass('search-visible');
    });

    $('.header-button--search').on('click', function () {
        $('html').addClass('search-visible');
    });

    $('.search__close').on('click', function() {
        $('html').removeClass('search-visible');
    });


    /* hide popup by click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.search, .header-button--search').length) {
            $('html').removeClass('search-visible');
        }
    });


    /* hide popup by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('search-visible');
        }
    });





})(jQuery);
