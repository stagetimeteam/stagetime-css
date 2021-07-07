(function($) {

    $('.org-edit__submit').on('click', function () {
        $(this).parents('.mfp-content').find('.overlay').addClass('overlay--visible');
        setTimeout(function (){
            $.magnificPopup.close();
        }, 3000);
    });

})(jQuery);
