(function($) {

    $('.expandable-bio__handler').on('click', function () {
        $(this).parents('.expandable-bio').toggleClass('expandable-bio--expanded');
    });


})(jQuery);
