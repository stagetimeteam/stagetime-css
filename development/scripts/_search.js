(function($) {

    $('.search__widget').on('focus', function () {
        $(this).parents('.search').addClass('search--expanded');
    });


    /* hide popup by click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.search').length) {
            $('.search').removeClass('search--expanded');
        }
    });


    /* hide popup by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.search').removeClass('search--expanded');
        }
    });

})(jQuery);
