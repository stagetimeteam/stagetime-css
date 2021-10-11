(function($) {
    var target;
    var peak;
    var peakShadow;

    $('[data-flyover]').on('mouseenter', function () {

        target = $($(this).attr('data-flyover'));
        peak = target.find('.flyover__peak');

        if( target.hasClass('flyover--organization-feed') ) {
            target.css({
                'top': $(this)[0].getBoundingClientRect().top - target.height() - 15,
                'left': $(this)[0].getBoundingClientRect().left - 37
            });
            peak.css({
                'bottom': '6px',
                'left': '60px'
            })
        }

        if( target.hasClass('flyover--side-card') ) {
            target.css({
                'top': $(this)[0].getBoundingClientRect().top + $(this).height() + 15,
                'right': $(window).outerWidth() - $(this)[0].getBoundingClientRect().left - $(this).outerWidth()
            });
            peak.css({
                'top': '-6px',
                'right': '46px'
            })
        }

        target.addClass('flyover--visible');

    }).on('mouseleave', function () {
        target.removeClass('flyover--visible');
    });


    /* to reload on next hover */
    $(window).on('scroll', function () {
        $('.flyover').removeClass('flyover--visible');
    });
    $('.scrollbar').on('scroll', function () {
        $('.flyover').removeClass('flyover--visible');
    });

})(jQuery);
