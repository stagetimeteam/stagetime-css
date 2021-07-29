(function($) {

    $('.enter__message').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y: hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });


    $('.enter__message').on('keypress', function () {
        $('.enter__send').removeClass('enter__send--disabled');
    });


})(jQuery);
