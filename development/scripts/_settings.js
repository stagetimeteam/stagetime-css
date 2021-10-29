(function($) {

    $('.settings__update:not(.settings__update--external), .settings__handler:not(.settings__handler--external)').on('click', function () {
        var $settingsItem = $(this).parents('.settings__item');
        $settingsItem.toggleClass('settings__item--expanded');

        if( $settingsItem.hasClass('settings__item--expanded') ) {
            $settingsItem.find('.settings__dropdown').slideDown();
        } else {
            $settingsItem.find('.settings__dropdown').slideUp();
        }
    });

    $('.settings__cancel').on('click', function () {
        var $settingsItem = $(this).parents('.settings__item');
        $settingsItem.removeClass('settings__item--expanded');
        $settingsItem.find('.settings__dropdown').slideUp();
    });



})(jQuery);
