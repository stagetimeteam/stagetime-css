(function($) {

    $('.operations__handler').on('click', function () {
        if( ! $(this).parents('.operations').hasClass('operations--expanded')){
            $('.operations').removeClass('operations--expanded'); /* close every other .operations */
            $(this).parents('.operations').addClass('operations--expanded');
        } else {
            $(this).parents('.operations').removeClass('operations--expanded');
        }
    });


    /* hide popup by overlay click ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.operations').length) {
            $('.operations').removeClass('operations--expanded');
        }
    });


    /* hide popup by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.operations').removeClass('operations--expanded');
        }
    });

})(jQuery);
