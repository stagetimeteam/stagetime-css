$(document).ready(function () {

    $('.mfp-handler').magnificPopup({
        type: 'inline',     /* to use custom HTML inside of popup */
        removalDelay: 200,
        showCloseBtn: false, /* we will have our own cross button in .window component */
        callbacks: {
            open: function() {
                $('.mfp-content .carousel').each(function () {
                    initCarousel($(this));
                });
            }
        }
    });

});
