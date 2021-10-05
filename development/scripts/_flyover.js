(function($) {
    var target;
    var top;
    var right

    $('[data-flyover]').on('mouseenter', function () {

        target = $($(this).attr('data-flyover'));
        top = $(this)[0].getBoundingClientRect().top + $(this).outerHeight();
        right = $(window).outerWidth() - $(this)[0].getBoundingClientRect().left - $(this).outerWidth();

        target.css({
            'display': 'block',
            'right': right,
            'top': top
        });

    }).on('mouseleave', function () {
        target.css({
            'display': 'none'
        });
    });

})(jQuery);
