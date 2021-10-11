(function($) {
    var target;
    var peak;
    var peakShadow;

    $('[data-flyover]').on('mouseenter', function () {

        target = $($(this).attr('data-flyover'));
        peak = target.find('.flyover__peak');
        peakShadow = target.find('.flyover__peak-shadow');

        if( target.hasClass('flyover--side-card') ) {
            target.css({
                'padding-top': '10px',
                'top': $(this)[0].getBoundingClientRect().top + $(this).outerHeight(),
                'right': $(window).outerWidth() - $(this)[0].getBoundingClientRect().left - $(this).outerWidth(),
            });
            peak.css({
                'top': '4px',
                'right': '46px'
            })
            peakShadow.css({
                'top': '4px',
                'right': '46px'
            })
        } else {
            // top = $(this)[0].getBoundingClientRect().top + $(this).outerHeight();
            // right = $(window).outerWidth() - $(this)[0].getBoundingClientRect().left - $(this).outerWidth();
            // bottom = 'auto';
            // left = 'auto';
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
