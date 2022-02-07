(function($) {

    $('.color-selection__item').on('click', function (){
        $(":root").css("--user-color", $(this).text());
        $('.color-selection__item--current').removeClass('color-selection__item--current');
        $(this).addClass('color-selection__item--current');
    });

})(jQuery);
