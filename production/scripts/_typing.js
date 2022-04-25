(function($) {

    $('.typing__message').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y: hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    $('.typing__message').on('keypress', function () {
        $('.typing__send').removeClass('typing__send--disabled');
        $('.typing__send').removeAttr('disabled');
    });


})(jQuery);
