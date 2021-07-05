(function($) {

    $('.referral__handler').on('click', function (){
        $('html').addClass('referral-expanded');
    });

    $('.ref-link__close').on('click', function (){
        $('html').removeClass('referral-expanded');
    });

})(jQuery);
