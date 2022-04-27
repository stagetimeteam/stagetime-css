(function($) {

    $('.crew__tag').on('click', function () {
        if( ! $(this).hasClass('crew__tag--current') ) {

            $('.crew__body--visible').removeClass('crew__body--visible');

            if( $(this).hasClass('crew__tag--chat'     ) ) { $('.crew__body--chat'     ).addClass('crew__body--visible'); }
            if( $(this).hasClass('crew__tag--workspace') ) { $('.crew__body--workspace').addClass('crew__body--visible'); }
            if( $(this).hasClass('crew__tag--members'  ) ) { $('.crew__body--members'  ).addClass('crew__body--visible'); }
            if( $(this).hasClass('crew__tag--resources') ) { $('.crew__body--resources').addClass('crew__body--visible'); }

            $('.crew__tag--current').removeClass('crew__tag--current');
            $(this).addClass('crew__tag--current');

        }
    });

})(jQuery);
