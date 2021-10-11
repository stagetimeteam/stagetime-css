(function($) {
    var target;
    var peak;
    var peakShadow;

    $('[data-flyover]').on('mouseenter', function () {

        target = $($(this).attr('data-flyover'));
        peak = target.find('.flyover__peak');

        if( target.hasClass('flyover--side-card') ) {
            target.css({
                'padding-top': '15px',
                'top': $(this)[0].getBoundingClientRect().top + $(this).outerHeight(),
                'right': $(window).outerWidth() - $(this)[0].getBoundingClientRect().left - $(this).outerWidth(),
            });
            peak.css({
                'top': '9px',
                'right': '46px'
            })
        }

        target.css({
            'display': 'block'
        });



    }).on('mouseleave', function () {
        target.css({
            'display': 'none'
        });
    });

})(jQuery);
