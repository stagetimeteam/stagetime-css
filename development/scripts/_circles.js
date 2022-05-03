(function($) {

    $('.circles__tag').on('click', function () {
        if( ! $(this).hasClass('circles__tag--current') ) {

            $('.circles__panel--visible').removeClass('circles__panel--visible');

            if( $(this).hasClass('circles__tag--chat'     ) ) { $('.circles__panel--chat'     ).addClass('circles__panel--visible'); }
            if( $(this).hasClass('circles__tag--workspace') ) { $('.circles__panel--workspace').addClass('circles__panel--visible'); }
            if( $(this).hasClass('circles__tag--members'  ) ) { $('.circles__panel--members'  ).addClass('circles__panel--visible'); }
            if( $(this).hasClass('circles__tag--resources') ) { $('.circles__panel--resources').addClass('circles__panel--visible'); }

            $('.circles__tag--current').removeClass('circles__tag--current');
            $(this).addClass('circles__tag--current');

        }
    });

    $('.circles__show-sidebar').on('click', function () {
        $('.circles').addClass('circles--expanded');
    });

    $('.circles__close-sidebar').on('click', function () {
        $('.circles').removeClass('circles--expanded');
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.circles__sidebar, .circles__show-sidebar').length) {
            $('.circles').removeClass('circles--expanded');
        }
    });

})(jQuery);
