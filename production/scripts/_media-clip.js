(function($) {

    $('.media-clip').on('click', function (event) {
        event.preventDefault();
        $('.media-clip').not( $(this) ).removeClass('media-clip--playing');
        $(this).toggleClass('media-clip--playing');
    });

})(jQuery);
