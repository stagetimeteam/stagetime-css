(function($) {
    var target;
    var peak;
    var peakShadow;

    $('[data-flyover]').on('mouseenter', function () {

        target = $($(this).attr('data-flyover'));
        peak = target.find('.flyover__peak');

        if( target.hasClass('flyover--organization-feed') ) {
            target.css({
                'bottom': $(window).outerHeight() - $(this)[0].getBoundingClientRect().top,
                'left': $(this)[0].getBoundingClientRect().left - 37,
                'padding-bottom': '15px'
            });
            peak.css({
                'bottom': '9px',
                'left': '60px'
            })
        }

        if( target.hasClass('flyover--side-card') ) {
            target.css({
                'top': $(this)[0].getBoundingClientRect().top + $(this).height(),
                'right': $(window).outerWidth() - $(this)[0].getBoundingClientRect().left - $(this).outerWidth(),
                'padding-top': '15px'
            });
            peak.css({
                'top': '9px',
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
