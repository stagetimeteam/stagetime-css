(function($) {

    $('.media-bar__favorite').on('click', function () {
        $(this).parents('.media-bar').toggleClass('media-bar--favorite');
    });

})(jQuery);
