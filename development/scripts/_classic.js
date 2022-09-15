(function($) {

    var $header = $('.header');
    var stickyPart = $('.classic__detachable-area');

    var viewportHeight;
    var sidebarHeight;
    var padding = 40;

    function init() {
        viewportHeight = $(window).height() - $header.outerHeight();
        sidebarHeight = stickyPart.outerHeight();
        if(viewportHeight - sidebarHeight - padding < 0) {
            stickyPart.css({
                'position': 'sticky',
                'top': (viewportHeight - sidebarHeight) + 'px'
            });
        } else {
            stickyPart.css({
                'position': 'sticky',
                'top': ($header.outerHeight() + padding) + 'px'
            });
        }
    }

    $(window).on('resize', init);
    $(document).ready(init);

})(jQuery);
