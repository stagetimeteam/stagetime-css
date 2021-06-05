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


    // post-handler__select-author


    $('.post-handler__message .input__widget').on('focus', function (){
        $.magnificPopup.open({
            items: {
                src: '#post-form',
            },
            type: 'inline',
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

});
