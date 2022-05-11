(function($) {

    $('.typing__message').expanding();

    $('.typing__message').on('keypress', function () {
        $('.typing__send').removeClass('typing__send--disabled');
        $('.typing__send').removeAttr('disabled');
    });


})(jQuery);
