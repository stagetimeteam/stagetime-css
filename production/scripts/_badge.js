(function($) {

    /* Dropdowns */

    $('.badge__body').on('click', function () {
        $('.badge').removeClass('badge--expanded'); /* Закрываем другие выпадайки */
        $(this).parents('.badge').addClass('badge--expanded');
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.badge').length) {
            $('.badge').removeClass('badge--expanded');
        }
    });

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.badge').removeClass('badge--expanded');
        }
    });

})(jQuery);
