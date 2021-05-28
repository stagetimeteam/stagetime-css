(function($) {

    $('.updates__switch .toggler__widget').on('change', function (){
        $(this).parents('.updates').toggleClass('updates--switch-to-news')
    });

})(jQuery);
