(function($) {

    $('.full-media-card__playback').on('click', function () {
        $(this).parents('.full-media-card').toggleClass('full-media-card--playing')
    });

})(jQuery);
