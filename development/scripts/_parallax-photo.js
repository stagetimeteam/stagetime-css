(function($) {

    var data = [];
    var headerHeight = $('.header').outerHeight();
    var shift = 150; /* 150px -- must be same to height value in .parallax-photo__image */
    var scrolled;
    var newValue;
    var normalizedValue;

    $('.parallax-photo').each(function (i) {
        data.push({
            '$container': $(this),
            '$image': $(this).find('.parallax-photo__image'),
            'height': $(this).outerHeight(),
            'offset': $(this).offset().top - headerHeight,
        });
    });

    function parallax() {
        data.forEach(function (current) {
            scrolled = $(this).scrollTop() - current.offset;
            newValue = scrolled / current.height * shift;
            normalizedValue = Math.max( 0, Math.min(shift, newValue ) ); /* value in between [0, shift] */
            current.$image.css('transform', 'translateY(-' + normalizedValue + 'px)')
        });
    }

    $(window).on('scroll', parallax);
    $(document).ready(parallax);

})(jQuery);
