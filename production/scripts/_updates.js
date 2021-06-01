(function($) {


    function updatesSwitch() {
        if ( $('.updates__switch .toggler__widget').prop('checked') ) {
            $('.updates').addClass('updates--switched-to-news')
        } else {
            $('.updates').removeClass('updates--switched-to-news')
        }
    }

    $('.updates__switch .toggler__widget').on('change', updatesSwitch);
    $(document).ready(updatesSwitch);

})(jQuery);
