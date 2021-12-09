(function($) {

    $('.slideshow__control').on('click', function () {
        var $this = $(this);
        var $slideshow = $this.parents('.slideshow');
        var $items = $slideshow.find('.slideshow__item')
        var $current = $slideshow.find('.slideshow__item--current');
        var $counter = $slideshow.find('.slideshow__counter');
        var $slideshowNext = $slideshow.find('.slideshow__control--next');
        var $slideshowPrev = $slideshow.find('.slideshow__control--prev');
        var current = $current.index();
        var total = $items.length;
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

        $current.removeClass('slideshow__item--current');
        $slideshow.find('.slideshow__item').eq(slideTo).addClass('slideshow__item--current');
        $counter.html( (slideTo + 1) + '/' + total )


        /* Disabling arrows */

        $slideshowPrev.removeClass('slideshow__control--disabled').prop('disabled', false);
        $slideshowNext.removeClass('slideshow__control--disabled').prop('disabled', false);

        if ( slideTo === total - 1 ) {
            $slideshowNext.addClass('slideshow__control--disabled').prop('disabled', true);
        } else if ( slideTo === 0 ) {
            $slideshowPrev.addClass('slideshow__control--disabled').prop('disabled', true);
        }

    });


})(jQuery);
