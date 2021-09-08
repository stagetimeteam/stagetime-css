(function($) {

    $(document).on('scroll', function (){
        if ( $(document).scrollTop() > 200 ) {
            $('html').addClass('explore-collapsed');
        }
        if ( $(document).scrollTop() === 0 ) {
            $('html').removeClass('explore-collapsed');
        }
    });

    $('.explore__show-search').on('click', function () {
        $('html').addClass('explore-collapsed');
    });


})(jQuery);
