(function($) {

    $(window).on('load', function () { /* wait while all fonts loaded and applied */
        $('.button--expandable').each(function () {
            $(this).removeClass('button--expandable'); /* just for the time of measuring */
            $(this).css('width', $(this).outerWidth() + 'px');
            $(this).addClass('button--expandable');
        });
    });

})(jQuery);
