$(document).ready(function () {

    $('.mfp-handler').magnificPopup({
        type: 'inline',     /* to use custom HTML inside of popup */
        removalDelay: 200,
        showCloseBtn: false, /* we will have our own cross button in .window component */
        callbacks: {
            open: function() {
                /* On popup open re-init Carousels: */
                $('.mfp-content .carousel').each(function () {
                    initCarousel($(this));
                });
                /* re-init Expanding Textareas:: */
                $('.edit-post__message--extendable-via-plugin').expanding();
            }
        }
    });

});
