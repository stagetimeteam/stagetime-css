(function($) {

    $('.dash-tiles__open-search').on('click', function () {
        $('.dash-tiles').addClass('dash-tiles--search-expanded');
    });

    $('.dash-tiles__close').on('click', function () {
        $('.dash-tiles').removeClass('dash-tiles--search-expanded');
    });

})(jQuery);
