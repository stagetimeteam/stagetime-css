(function($) {

    $('.shortcut--your-area').on('click', function (event) {
        event.preventDefault();
        $('html').toggleClass('explore-location-visible');
    });

})(jQuery);
