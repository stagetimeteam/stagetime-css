(function($) {

    /* Select placeholder */

    $('.input--select .input__widget').on('change', function () {
        if( $(this).val() === 'placeholder' ) {
            $(this).parent('.input').addClass('input--placeholder-is-chosen')
        } else {
            $(this).parent('.input').removeClass('input--placeholder-is-chosen')
        }
    });


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
