(function($) {
    $('.subscription__submit').on('click', function () {
        var $this = $(this);
        if ( ! $this.hasClass('button_loading') &&  ! $this.hasClass('button_success') ) {
            $this.addClass('button_loading');
            setTimeout(function () {
                $this.removeClass('button_loading').addClass('button_success');
                $('.alert').fadeIn(200);
            }, 3000);
            setTimeout(function () {
                $this.removeClass('button_success');
            }, 4500);
        }
    });
})(jQuery);
