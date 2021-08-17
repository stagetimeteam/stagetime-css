(function($) {

    $('.conversation-bar__back').on('click', function () {
        $('html').addClass('dialogs-visible');
    });

    $('.conversation').on('click', function () {
        $('html').removeClass('dialogs-visible');
    });


    $('.chat__new, .simpler-null__action').on('click', function () {
        $('html').removeClass('dialogs-visible');
        $('html').addClass('chat-creating');
        $('.suggesting__widget').focus();
    });

})(jQuery);
