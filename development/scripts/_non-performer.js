(function($) {

    function init() {
        var viewport = $(window).height() - $('.header').outerHeight();
        var sidebar = $('.non-performer__detachable-area').outerHeight();
        if(viewport - sidebar < 0) {
            $('.non-performer__detachable-area').css('top', viewport - sidebar)
        } else {
            $('.non-performer__detachable-area').css('top', $('.header').outerHeight() + 40)
        }

    }


    init();

})(jQuery);
