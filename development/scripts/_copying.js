(function($) {

    $('.copying').on('click', function () {
        var $this = $(this);
        $this.addClass('copying--activated').prop("disabled", true);

        setTimeout(function () {
            $this.removeClass('copying--activated').prop("disabled", false);
        }, 3000);
    });

})(jQuery);
