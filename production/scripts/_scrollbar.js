(function($) {

    if( ! mobileMediaQuery.matches ) {
        $('.scrollbar').scrollbar();
    } else {
        $('.scrollbar').scrollbar('destroy')
    }

})(jQuery);
