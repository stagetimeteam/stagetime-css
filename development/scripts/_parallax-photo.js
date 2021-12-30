(function($) {

    var $header = $('.header');
    var data = [];
    var headerHeight;
    var windowHeight;
    var shift;
    var scrolled;
    var newValue;
    var normalizedValue;

    function init() {
        data = [];
        headerHeight = $header.length ? $header.outerHeight() : 0;
        windowHeight = $(window).outerHeight() - headerHeight;
        shift = 300; /* 300px -- must be same to height value in .parallax-photo__image */

        $('.parallax-photo').each(function (i) {
            data.push({
                '$container': $(this),
                '$image': $(this).find('.parallax-photo__image'),
                'height': $(this).outerHeight() + windowHeight,
                'offset': $(this).offset().top - headerHeight,
            });
        });
    }

    function parallax() {
        data.forEach(function (current) {
            scrolled = $(document).scrollTop() - current.offset + windowHeight; /* this set the are of [window + photo], in other words is some whitespace before photo plus photo itself */
            newValue = scrolled / current.height * shift;
            normalizedValue = Math.max( 0, Math.min(shift, newValue ) ); /* value in between [0, shift] */
            current.$image.css('transform', 'translateY(-' + normalizedValue + 'px)')
        });
    }

    $(document).ready(init);
    $(window).on('scroll', init);

    $(document).ready(parallax);
    $(window).on('scroll', parallax);

})(jQuery);
