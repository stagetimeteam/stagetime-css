(function($) {

    $('.settings__update').on('click', function () {
        var $settingsItem = $(this).parents('.settings__item');
        $settingsItem.toggleClass('settings__item--expanded');

        if( $settingsItem.hasClass('settings__item--expanded') ) {
            $settingsItem.find('.settings__dropdown').slideDown();
        } else {
            $settingsItem.find('.settings__dropdown').slideUp();
        }

    });

})(jQuery);
