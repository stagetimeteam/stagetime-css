(function($) {

    $('.dash-tiles__body > .scrollbar').on('scroll', function (){
        if ( $(this).scrollTop() > 10 ) {
            $('html').addClass('explore-collapsed');
        }
    });

    $('.explore__show-search').on('click', function (){
        $('html').addClass('explore-collapsed');
    });


})(jQuery);
