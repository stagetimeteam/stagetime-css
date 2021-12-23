(function($) {

    var container = $('.parallax-photo').outerHeight();
    var shift = 150;
    var scrolled;
    var newValue;
    var $image = $('.parallax-photo__file');

    var imageOffset = $('.parallax-photo').offset().top - $('.header').outerHeight();


    $(window).on('scroll', function () {

        scrolled = $(this).scrollTop() - imageOffset;
        newValue = Math.max( 0, Math.min(shift, scrolled / container * shift) ); /* value in between 0 or shift */

        // if ( scrolled >= 0 && scrolled <= container ) {
            $image.css('transform', 'translateY(-' + newValue + 'px)')
        // }

    });

})(jQuery);
