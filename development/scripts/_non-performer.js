(function($) {

    var $header = $('.header');
    var stickyPart = $('.non-performer__detachable-area');

    var viewportHeight;
    var sidebarHeight;
    var paddingTop = 40;
    var spacingBottom = 40;

    function init() {
        viewportHeight = $(window).height() - $header.outerHeight();
        sidebarHeight = stickyPart.outerHeight();
        if(viewportHeight - sidebarHeight - paddingTop - spacingBottom < 0) {
            stickyPart.css({
                'position': 'sticky',
                'top': (viewportHeight - sidebarHeight + 20) + 'px' /* 20px is a little correction for spacing at the bottom */
            });
        } else {
            stickyPart.css({
                'position': 'sticky',
                'top': ($header.outerHeight() + paddingTop) + 'px'
            });
        }
    }

    $(window).on('resize', init);
    $(document).ready(init);

})(jQuery);
