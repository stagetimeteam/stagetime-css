(function($) {

    $('.quick-message__submit').on('click', function () {
        $(this).parents('.quick-message').find('.quick-message__confirmation').addClass('quick-message__confirmation--visible');
    });

})(jQuery);
