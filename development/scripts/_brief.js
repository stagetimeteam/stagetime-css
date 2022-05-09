(function($) {

    $('.brief__about-handler').on('click', function () {
        $('.brief__about').toggleClass('brief__about--expanded');
    });

    $('.brief__information-handler').on('click', function () {
        $('.brief__information').toggleClass('brief__information--expanded');
    });


})(jQuery);
