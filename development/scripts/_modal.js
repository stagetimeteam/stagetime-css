(function($) {



    $('.modal').on('click', function () {
        $(this).find('.modal-foot__operations').find('.button--disabled').removeClass('button--disabled')
    });

})(jQuery);
