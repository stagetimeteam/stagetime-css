(function($) {

    $('.network-news__more').on('click', function () {
        $(this).parents('.network-news').toggleClass('network-news--limited');
    });

})(jQuery);
