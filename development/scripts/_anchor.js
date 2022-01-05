(function($) {

    var scrollSpeedPer100ms = 200; /* 200px per 100ms */

    $('.anchor').on('click', function (event) {
        event.preventDefault();

        var $target = $( $(this).attr('href') );
        var headerHeight = $('.header').outerHeight();
        var scrollDistance = $target.offset().top - $(this).offset().top - headerHeight;
        var animationDuration = Math.max(Math.abs(scrollDistance) / scrollSpeedPer100ms * 100, 300); /* Not less than 300ms (for short distance) */
        var scrollGap = $(this).attr('data-anchor-gap') ? +$(this).attr('data-anchor-gap') : 0;
        var scrollCoordinate = $target.offset().top - headerHeight;

        if( $target.length ) {
            $('html, body').animate({
                scrollTop: Math.ceil(scrollCoordinate - scrollGap)
            }, animationDuration);
        }
    });

})(jQuery);
