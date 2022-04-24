(function($) {

    $('.my-circles__tag').on('click', function () {
        if( ! $(this).hasClass('my-circles__tag--current') ) {
            $('.my-circles__tag--current').removeClass('my-circles__tag--current');
            $(this).addClass('my-circles__tag--current');
            $('.my-circles__panel--current').removeClass('my-circles__panel--current');
            $('.my-circles__panel').eq( $(this).index() ).addClass('my-circles__panel--current');
        }
    });

})(jQuery);
