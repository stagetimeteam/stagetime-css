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




    /* Dropdowns */

    $('.input__widget').on('click', function () {

        /* Remove overflow if inside of modal window.
           See "markups/_modal.html" for details
           Add back in: (1) */
        var $modalBody = $(this).parents('.modal-body');
        if ($modalBody.length) {
            if( $modalBody[0].scrollHeight <= $modalBody.outerHeight()  ) {
                $modalBody.addClass('modal-body--no-overflow');
            }
        }

        $('.input').removeClass('input--expanded'); /* Close rest of dropdowns */
        $(this).parents('.input').addClass('input--expanded');
        $(this).parents('.input').find('.lookup__field').focus();
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.input').length) {
            $('.modal-body').removeClass('modal-body--no-overflow'); /* (1) */
            $('.input').removeClass('input--expanded');
        }
    });

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.input').removeClass('input--expanded');
        }
    });

    $('.input__suggest').on('click', function () {
        var value;

        if ( ! $(this).hasClass('input__suggest--placeholder')  ) {
            value = $(this).text();
        } else {
            value = '';
        }

        $(this).parents('.input').removeClass('input--expanded');
        $(this).parents('.input').find('.input__widget').val(value);
    });


    /* Counter sample */
    $('.input--area .input__widget').on('keyup', function () {
        var counter = $(this).val().trim().length;
        console.log(counter);
        $(this).parents('.input').find('.input__counter').text(counter + '/80');
    });


    /* padding under .input__hint */

    var inputHintPadding;

    $('.input__hint').each(function () {
        var inputHintPadding = $(this).outerWidth();
        $(this).parents('.input').find('.input__widget').css('padding-right', inputHintPadding);
    });


    /* Errors demo */

    $('.input__widget').on('focus', function () {
        $(this).parents('.input').removeClass('input--error')
        $(this).parents('.input').siblings('.output').remove();
    });


    /* select2 init */

    $('.js-example-basic-multiple').select2({
        tags: true,
        createTag: function (params) {
            return {
                id: params.term,
                text: params.term,
                newOption: true
            }
        },
        templateResult: function (data) {
            if (data.newOption) {
                var $result = $('<div>Create “' + data.text + '”</div>');
                return $result;
            }

            return data.text;
        }
    });


})(jQuery);
