(function($) {
    var target;
    var peak;
    var peakShadow;

    $('[data-flyover]').on('mouseenter', function () {

        target = $($(this).attr('data-flyover'));
        peak = target.find('.flyover__peak');

        if( target.hasClass('flyover--side-card') ) {
            target.css({
                'top': $(this)[0].getBoundingClientRect().top + $(this).outerHeight(),
                'right': $(window).outerWidth() - $(this)[0].getBoundingClientRect().left - $(this).outerWidth(),
                'transform': 'translateY(15px)'
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

})(jQuery);
