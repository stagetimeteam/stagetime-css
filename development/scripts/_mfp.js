$(document).ready(function () {

    var options = {
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
    }

    $('.mfp-handler').magnificPopup(options);

    //
    // /* Init post-form popup by textarea focus and select click */
    //
    // options.items = { src: '#post-form' };
    //
    // $('.post-handler__message .input__widget').on('focus', function () {
    //     $.magnificPopup.open(options);
    // });
    //
    // $('.post-handler__select-author .input__widget').on('click', function (event) {
    //     event.preventDefault();
    //     $.magnificPopup.open(options);
    // });

});
