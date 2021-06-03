(function($) {

    /* Expand text area manually */

    $('.edit-post__message--extendable').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y: hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });


    /* Expand text area via jQuery plugin */

    $('.edit-post__message--extendable-via-plugin').expanding();

})(jQuery);
