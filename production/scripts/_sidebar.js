(function($) {

    $('.header-button--sidebar').on('click', function () {
        $('html').toggleClass('sidebar-visible');
    });

    $('.sidebar__overlay').on('click', function () {
        $('html').removeClass('sidebar-visible');
    });

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('sidebar-visible');
        }
    });

})(jQuery);
