(function($) {

    var themesData = {};

    $.ajax({
        url: '../themes/themes.json',
        dataType: 'json',
        async: false,
        success: function(data) {
            themesData = { ...data };
        }
    });


    function changeTheme(newTheme) {
        $('.color-selection__item--current').removeClass('color-selection__item--current');
        $('[data-theme="' + newTheme + '"]').addClass('color-selection__item--current');

        $.each(themesData[newTheme], function( key, value ) {
            $(":root").css("--" + key, value);
        });
    }



    $('.color-selection__item').on('click', function () {
        if( ! $(this).hasClass('color-selection__item--disabled') ) {
            changeTheme($(this).data('theme'));
        }
    });

    /* Not on document ready, but immediately when loaded. Preferable even on back-end. */
    var currentTheme = $('.color-selection__item--current').data('theme') ? $('.color-selection__item--current').data('theme') : 'thank-you-five'
    changeTheme(currentTheme);

})(jQuery);
