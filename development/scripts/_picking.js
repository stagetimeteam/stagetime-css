(function($) {

    $('.picking__handler').on('click', function () {
        var $picking = $(this).parents('.picking');

        if( ! $picking.hasClass('picking--expanded') ) {
            $picking.find('.picking__dropdown').slideDown(200);
            $picking.addClass('picking--expanded');
        } else {
            $picking.find('.picking__dropdown').slideUp(200);
            $picking.removeClass('picking--expanded');
        }

    });

    /* bottom fade on scroll */

    $('.picking__list').on('scroll', function () {
        var $pickingList = $(this);
        if ($pickingList.scrollTop() + $pickingList.innerHeight() >= $pickingList[0].scrollHeight) {
            $pickingList.addClass('picking__list--scrolled-to-the-end');
        } else {
            $pickingList.removeClass('picking__list--scrolled-to-the-end');
        }
    });

})(jQuery);
