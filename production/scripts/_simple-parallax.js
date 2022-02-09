(function($) {

    var $header = $('.header');
    var data = [];
    var headerHeight;
    var shift;
    var scrolled;
    var newValue;
    var normalizedValue;

    function init() {
        data = [];
        headerHeight = $header.length ? $header.outerHeight() : 0;
        shift = 300;

        $('.simple-parallax').each(function (i) {
            data.push({
                '$container': $(this),
                '$image': $(this).find('.simple-parallax__image'),
                'height': $(this).outerHeight(),
                'offset': $(this).offset().top - headerHeight,
            });
        });
    }

    function parallax() {
        data.forEach(function (current) {
            scrolled = $(document).scrollTop() - current.offset;
            newValue = scrolled / current.height * shift;
            normalizedValue = Math.max( 0, Math.min(shift, newValue ) ); /* value in between [0, shift] */
            current.$image.css('transform', 'translateY(' + normalizedValue + 'px)')
        });
    }

    $(document).ready(init);
    $(window).on('scroll', init);

    $(document).ready(parallax);
    $(window).on('scroll', parallax);

})(jQuery);
