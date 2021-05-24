/* Scroll by arrow click */

$(document).ready(function () {

    $('.carousel__control').on('click', function () {

        var $carousel = $(this).parents('.carousel');
        var $scrollContainer = $carousel.find('.carousel__container');
        var scrolled = $scrollContainer.scrollLeft();
        var toScroll = $scrollContainer.outerWidth(); /* by default just 100% of width */
        var scrollCoordinate = $(this).hasClass('carousel__control--next') ? scrolled + toScroll : scrolled - toScroll;

        $carousel.addClass('carousel--being-scrolled-by-arrow');

        $scrollContainer.animate({
            scrollLeft: scrollCoordinate
        }, 500, function () {
            arrowsVisibility($scrollContainer);
            $carousel.removeClass('carousel--being-scrolled-by-arrow');
        });
    });

});



/* Disable arrows */

function arrowsVisibility($carouselContainer) {

    /* backward */
    if( $carouselContainer.scrollLeft() === 0) {
        $carouselContainer.siblings('.carousel__control--prev').addClass('carousel__control--disabled');
    } else {
        $carouselContainer.siblings('.carousel__control--prev').removeClass('carousel__control--disabled');
    }

    /* forward */
    var RibbonWidth = 0;

    $carouselContainer.find('.carousel__item').each(function () {
        RibbonWidth += $(this).outerWidth();
    });

    if( $carouselContainer.scrollLeft() >= Math.ceil(RibbonWidth - $carouselContainer.outerWidth() ) - 1 ) {
        $carouselContainer.siblings('.carousel__control--next').addClass('carousel__control--disabled');
    } else {
        $carouselContainer.siblings('.carousel__control--next').removeClass('carousel__control--disabled');
    }
}


$(document).ready(function () {
    $('.carousel__container').on('scroll', function () {
        arrowsVisibility( $(this) );
    });
});

$(window).on('resize', function () {
    $('.carousel__container').each(function () {
        arrowsVisibility( $(this) );
    })
});

$(document).ready(function () {
    $('.carousel__container').each(function () {
        arrowsVisibility( $(this) );
    })
});



/* Init only when we have enough elements to scroll */

function initCarousel($carousel) {

    var RibbonWidth = 0;

    $carousel.find('.carousel__item').each(function () {
        RibbonWidth += $(this).outerWidth();
    });

    if ( $carousel.find('.carousel__container').outerWidth() < RibbonWidth ) {
        $carousel.addClass('carousel--initialized');
    } else {
        $carousel.removeClass('carousel--initialized');
    }

    arrowsVisibility( $carousel.find('.carousel__container') );
}

$(window).on('resize', function () {
    $('.carousel').each(function () {
        initCarousel( $(this) );
    })
});

$(document).ready(function () {
    $('.carousel').each(function () {
        initCarousel( $(this) );
    })
});

