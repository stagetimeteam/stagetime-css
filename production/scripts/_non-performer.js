(function($) {

    var $header = $('.header');
    var stickyPart = $('.non-performer__detachable-area');

    var viewportHeight;
    var sidebarHeight;

    function init() {
        viewportHeight = $(window).height() - $header.outerHeight();
        sidebarHeight = stickyPart.outerHeight();
        if(viewportHeight - sidebarHeight < 0) {
            stickyPart.css({
                'position': 'sticky',
                'top': (viewportHeight - sidebarHeight) + 'px'
            });
        } else {
            stickyPart.css({
                'position': 'sticky',
                'top': ($header.outerHeight() + 40) + 'px'
            });
        }
    }

    $(window).on('resize', init);
    $(document).ready(init);

})(jQuery);
