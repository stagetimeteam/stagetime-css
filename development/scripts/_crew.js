(function($) {

    $('.crew__tag').on('click', function () {
        if( ! $(this).hasClass('crew__tag--current') ) {

            $('.crew__panel--visible').removeClass('crew__panel--visible');

            if( $(this).hasClass('crew__tag--chat'     ) ) { $('.crew__panel--chat'     ).addClass('crew__panel--visible'); }
            if( $(this).hasClass('crew__tag--workspace') ) { $('.crew__panel--workspace').addClass('crew__panel--visible'); }
            if( $(this).hasClass('crew__tag--members'  ) ) { $('.crew__panel--members'  ).addClass('crew__panel--visible'); }
            if( $(this).hasClass('crew__tag--resources') ) { $('.crew__panel--resources').addClass('crew__panel--visible'); }

            $('.crew__tag--current').removeClass('crew__tag--current');
            $(this).addClass('crew__tag--current');

        }
    });

    $('.crew__show-sidebar--has-updates').on('click', function () {
        $('.crew').addClass('crew--expanded');
    });

    $('.crew__close-sidebar').on('click', function () {
        $('.crew').removeClass('crew--expanded');
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.crew__sidebar, .crew__show-sidebar').length) {
            $('.crew').removeClass('crew--expanded');
        }
    });

})(jQuery);
