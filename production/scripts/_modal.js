(function($) {

    /* Remove disabling class from submit button */
    $('.modal').on('click', function () {
        $(this).find('.modal-foot__operations').find('.button--disabled').removeClass('button--disabled')
    });

})(jQuery);
