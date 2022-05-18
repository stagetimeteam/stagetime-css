(function($) {

    $('.header-button--sidebar').on('click', function () {
        $('html').toggleClass('sidebar-visible');
    });

    // make closing overlay under sidebar to close it
    // $('???').on('click', function () {
    //     $('html').removeClass('profile-visible');
    // });


    /* hide profile dropdown by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('sidebar-visible');
        }
    });

})(jQuery);
