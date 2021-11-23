(function($) {

    $('.side__show-customization').on('click', function (){
        $('.side').addClass('side--expanded');
    });


    $('.side__close-customization').on('click', function (){
        $('.side').removeClass('side--expanded');
    });

})(jQuery);
