(function($) {

    var $header = $('.header');
    var $stickyPart = $('.vertical-artist__detachable-area');

    var headerHeight = $header.outerHeight();
    var viewportHeight;
    var sidebarHeight;

    function init() {
        viewportHeight = $(window).height() - headerHeight;
        sidebarHeight = $stickyPart.outerHeight();
        $stickyPart.css({
            'position': 'sticky',
            'top': headerHeight + 'px'
        });
    }

    $(window).on('resize', init);
    $(document).ready(init);

})(jQuery);
