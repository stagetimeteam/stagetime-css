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


    $(document).ready(function () {
        changeTheme($('.color-selection__item--current').data('theme'));
    });

    $('.color-selection__item').on('click', function () {
        changeTheme($(this).data('theme'));
    });

})(jQuery);
