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



    /* Adjustable inputs */

    var $sizeChecker = jQuery('.size-checker');

    function selectSetWidth($field) {
        if ( $field.is('select') ) {
            $sizeChecker.html($field.children("option:selected").html());
        } else if($field.is('div')) {
            $sizeChecker.html($field.html());
        } else {
            $sizeChecker.html($field.val() ? $field.val() : $field.attr('placeholder'));
        }
        $sizeChecker.css({
            'border-left': $field.css('border-left'),
            'border-right': $field.css('border-right'),
            'padding-left': $field.css('padding-left'),
            'padding-right': $field.css('padding-right'),
            'font-family': $field.css('font-family'),
            'font-weight': $field.css('font-weight'),
            'font-size': $field.css('font-size'),
            'line-height': $field.css('line-height'),
            'letter-spacing': $field.css('letter-spacing')
        });
        var width = $sizeChecker.outerWidth();

        /* Possible with limitation with JavaScript, but better do it via CSS.
         *  If done with CSS can be changed to different values in different areas
        */
        // if ( width > 500 ) {
        //     width = 500;
        // }

        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
            if ( $field.is('select') ) {
                width = width + 10;
                $field.css('margin-left', '-4px' );
            }
        }

        $field.css('width', Math.max( 50, width ) );

        $sizeChecker.html(''); /* Clean up for next iteration */
    }

    $('.input--adjustable .input__widget').each(function () {
        selectSetWidth( $(this) );
    });

    $('.input--adjustable .input__widget').on('input', function () {
        selectSetWidth( $(this) );
    });

    $('.input--adjustable .input__widget').on('change', function () {
        selectSetWidth( $(this) );
    });


})(jQuery);
