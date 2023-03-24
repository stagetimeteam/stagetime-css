(function($) {

    $('.org3__read-more').on('click', function () {
        $(this).parents('.org3').find('.org3__description').removeClass('clamping clamping--3-rows');
        $(this).remove();
    });


})(jQuery);
