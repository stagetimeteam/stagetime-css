(function($) {

    $('#temp-add-video-handler').on('click', function () {
        $('.post-form__screen--current').removeClass('post-form__screen--current');
        $('#temp-add-video-screen').addClass('post-form__screen--current');
    });

    $('#temp-add-link-handler').on('click', function () {
        $('.post-form__screen--current').removeClass('post-form__screen--current');
        $('#temp-add-link-screen').addClass('post-form__screen--current');
    });

})(jQuery);
