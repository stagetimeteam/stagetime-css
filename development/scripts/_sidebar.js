(function($) {

    $('.header-button--sidebar').on('click', function () {
        $('html').toggleClass('sidebar-visible');
    });

    // make closing overlay under sidebar to close it
    // $('???').on('click', function () {
    //     $('html').removeClass('profile-visible');
    // });


})(jQuery);
