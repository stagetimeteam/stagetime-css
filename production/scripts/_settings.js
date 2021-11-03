(function($) {

    $('.settings__edit:not(.settings__edit--external), .settings__handler:not(.settings__handler--external)').on('click', function () {
        var $settingsItem = $(this).parents('.settings__item');
        $settingsItem.toggleClass('settings__item--expanded');

        if( $settingsItem.hasClass('settings__item--expanded') ) {
            $settingsItem.find('.settings__dropdown').slideDown();
        } else {
            $settingsItem.find('.settings__dropdown').slideUp();
        }
    });

    $('.settings__close, .form__cancel, .close-account__cancel').on('click', function () {
        var $settingsItem = $(this).parents('.settings__item');
        $settingsItem.removeClass('settings__item--expanded');
        $settingsItem.find('.settings__dropdown').slideUp();
    });



})(jQuery);
