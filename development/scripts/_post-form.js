(function($) {

    $('#temp-main-handler').on('click', function () {
        $('.post-form__screen--current').removeClass('post-form__screen--current');
        $('#temp-main-screen').addClass('post-form__screen--current');
    });

    $('#temp-add-video-handler').on('click', function () {
        $('.post-form__screen--current').removeClass('post-form__screen--current');
        $('#temp-add-video-screen').addClass('post-form__screen--current');
    });

    $('#temp-add-link-handler').on('click', function () {
        $('.post-form__screen--current').removeClass('post-form__screen--current');
        $('#temp-add-link-screen').addClass('post-form__screen--current');
    });

    $('#temp-add-tag-handler, #temp-add-tag-alternate-handler').on('click', function () {
        $('.post-form__screen--current').removeClass('post-form__screen--current');
        $('#temp-add-tag-screen').addClass('post-form__screen--current');
    });

})(jQuery);
