(function($) {




    /* Expand text area manually */

    $('.input--extendable .input__widget').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y: hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    /* Expand text area via jQuery plugin */

    $('.input--extendable-via-plugin .input__widget').expanding();

})(jQuery);
