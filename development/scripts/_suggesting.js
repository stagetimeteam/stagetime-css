(function($) {

    $('.suggesting__widget').on('focus', function () {
        $(this).parents('.suggesting').addClass('suggesting--expanded');
    });


    /* click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.suggesting').length) {
            $('.suggesting').removeClass('suggesting--expanded');
        }
    });


    /* Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.suggesting').removeClass('suggesting--expanded');
        }
    });


})(jQuery);
