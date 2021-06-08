(function($) {


    function updatesSwitch() {
        $('.dash-intro .updates').toggleClass('updates--switched-to-news')
        $('.dash-side .updates').toggleClass('updates--switched-to-news')
    }

    $('.updates__switch .toggler__widget').on('change', updatesSwitch);

})(jQuery);
