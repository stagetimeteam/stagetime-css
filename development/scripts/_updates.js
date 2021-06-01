(function($) {


    function updatesSwitch() {
        if ( $('.updates__switch .toggler__widget').prop('checked') ) {
            $('.updates').addClass('updates--switch-to-news')
        } else {
            $('.updates').removeClass('updates--switch-to-news')
        }
    }

    $('.updates__switch .toggler__widget').on('change', updatesSwitch);
    $(document).ready(updatesSwitch);

})(jQuery);
