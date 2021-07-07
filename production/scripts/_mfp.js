$(document).ready(function () {

    $('.mfp-handler').magnificPopup({
        type: 'inline',     /* to use custom HTML inside of popup */
        removalDelay: 200,
        showCloseBtn: false, /* we will have our own cross button in .window component */
        callbacks: {
            open: function() {
                /* Add */
                $('html').addClass('modal-active');
                /* On popup open re-init Carousels inside: */
                $('.mfp-content .carousel').each(function () {
                    initCarousel($(this));
                });
                /* re-init Expanding Textareas: */
                $('.mfp-content .edit-post__message--extendable-via-plugin').expanding();
                $('.mfp-content .input--extendable-via-plugin .input__widget').expanding();
            }
        }
    });

    $('.mfp-cancel').on('click', function () {
        $.magnificPopup.close();
        $('html').removeClass('modal-active');
    });


});
