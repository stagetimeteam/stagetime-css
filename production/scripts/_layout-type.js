(function($) {

    $('.layout-type').on('click', function () {
        $('.layout-type--current').removeClass('layout-type--current');
        $(this).addClass('layout-type--current');
    });

})(jQuery);
