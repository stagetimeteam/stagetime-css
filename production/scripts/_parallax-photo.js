(function($) {

    var $container = $('.parallax-photo');
    var $image = $('.parallax-photo__image');
    var height = $container.outerHeight();
    var offset = $container.offset().top - $('.header').outerHeight();
    var shift = 150; /* 150px -- must be same to height value in .parallax-photo__image */
    var scrolled;
    var newValue;
    var normalizedValue;


    $(window).on('scroll', function () {
        scrolled = $(this).scrollTop() - offset;
        newValue = scrolled / height * shift;
        normalizedValue = Math.max( 0, Math.min(shift, newValue ) ); /* value in between [0, shift] */
        $image.css('transform', 'translateY(-' + normalizedValue + 'px)')
    });

})(jQuery);
