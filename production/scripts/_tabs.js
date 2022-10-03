(function($) {

    $('.tabs__tag').on('click', function () {
        if( ! $(this).hasClass('tabs__tag--current') ) {
            var $tabs = $(this).parent('.tabs__ribbon').parent('.tabs__nav').parent('.tabs'); /* don't go higher than this current level (in case of tabs in tabs) */
            var index = $(this).index();
            $tabs.children('.tabs__nav').children('.tabs__ribbon').children('.tabs__tag--current').removeClass('tabs__tag--current');
            $tabs.children('.tabs__nav').children('.tabs__ribbon').children('.tabs__tag').eq(index).addClass('tabs__tag--current');
            $tabs.children('.tabs__bodies').children('.tabs__item--current').removeClass('tabs__item--current');
            $tabs.children('.tabs__bodies').children('.tabs__item').eq(index).addClass('tabs__item--current');
        }
    });

})(jQuery);
