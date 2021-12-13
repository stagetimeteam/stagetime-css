(function($) {



    function slide($slideshow, slideTo) {
        var $items = $slideshow.find('.slideshow__item')
        var $itemCurrent = $slideshow.find('.slideshow__item--current');
        var $counter = $slideshow.find('.slideshow__counter');
        var $next = $slideshow.find('.slideshow__control--next');
        var $prev = $slideshow.find('.slideshow__control--prev');
        var $dots = $slideshow.find('.slideshow__dot');
        var $dotCurrent = $slideshow.find('.slideshow__dot--current');
        var current = $itemCurrent.index();
        var total = $items.length;

        $itemCurrent.removeClass('slideshow__item--current');
        $slideshow.find('.slideshow__item').eq(slideTo).addClass('slideshow__item--current');
        $counter.html( (slideTo + 1) + '/' + total )

        $dotCurrent.removeClass('slideshow__dot--current');
        $slideshow.find('.slideshow__dot').eq(slideTo).addClass('slideshow__dot--current');


        /* Disabling arrows */

        $prev.removeClass('slideshow__control--disabled').prop('disabled', false);
        $next.removeClass('slideshow__control--disabled').prop('disabled', false);

        if ( slideTo === total - 1 ) {
            $next.addClass('slideshow__control--disabled').prop('disabled', true);
        } else if ( slideTo === 0 ) {
            $prev.addClass('slideshow__control--disabled').prop('disabled', true);
        }

    }


    /* Navigation using dots */

    $('.slideshow__dot').on('click', function () {
        slide( $(this).parents('.slideshow'), $(this).index());
    });


    /* Navigation using arrows */

    $('.slideshow__control').on('click', function () {
        var $this = $(this);
        var $slideshow = $this.parents('.slideshow');
        var current = $slideshow.find('.slideshow__item--current').index();
        var total = $slideshow.find('.slideshow__item').length;
        var slideTo = 0;


        /* Sliding */

        if( $this.hasClass('slideshow__control--next') ) {
            if (current + 1 === total) {
                return;
            } else {
                slideTo = current + 1;
            }
        }

        if( $this.hasClass('slideshow__control--prev') ) {
            if (current === 0) {
                return;
            } else {
                slideTo = current - 1;
            }
        }

        slide( $(this).parents('.slideshow'), slideTo);

    });


})(jQuery);
