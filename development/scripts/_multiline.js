(function($) {

    $('.multiline__handler').on('click', function (event) {
        event.preventDefault();
        $(this).parents('.multiline').toggleClass('multiline--expanded');
    });


})(jQuery);
