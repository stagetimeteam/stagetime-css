(function($) {

    /* Начальные значения */

    var $scrollable = $('.scrollable__container');
    var scrollLeftEdge;
    var scrollRightEdge;

    function initScrollableValues() {
        scrollLeftEdge = 0;
        scrollRightEdge = Math.floor($scrollable.find('.scrollable__ribbon').outerWidth() - $scrollable.outerWidth() );
    }

    $(window).on('load', initScrollableValues);
    $(window).on('resize', initScrollableValues);



    /* Прокрутка */

    function scrollEdges() {
        if( $scrollable.scrollLeft() === scrollLeftEdge) {
            $scrollable.parents('.scrollable').addClass('scrollable--left-edge');
        } else {
            $scrollable.parents('.scrollable').removeClass('scrollable--left-edge');
        }

        if( $scrollable.scrollLeft() === scrollRightEdge) {
            $scrollable.parents('.scrollable').addClass('scrollable--right-edge');
        } else {
            $scrollable.parents('.scrollable').removeClass('scrollable--right-edge');
        }
    }

    $(window).on('load', scrollEdges);
    $scrollable.on('scroll', scrollEdges);

})(jQuery);
