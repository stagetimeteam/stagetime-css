(function($) {

    $('.operations__handler').on('click', function () {
        $(this).parents('.operations').toggleClass('operations--expanded');
    });


    /* hide popup by overlay click ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.operations').length) {
            $('.operations').removeClass('operations--expanded');
        }
    });


    /* hide popup by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode == 27) {
            $('.operations').removeClass('operations--expanded');
        }
    });

})(jQuery);
