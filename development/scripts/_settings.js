(function($) {

    $('.settings__update').on('click', function () {
        $(this).parents('settings__item').toggleClass('settings__item--expanded');
    });


})(jQuery);
