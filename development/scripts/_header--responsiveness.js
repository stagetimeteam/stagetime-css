$(document).ready(function () {

    $('.header__profile-handler').on('click', function () {
        $('.header').toggleClass('header--expanded');
    });


    /* click outside ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.header__dropdown, .header__profile-handler').length) {
            $('.header').removeClass('header--expanded');
        }
    });


    /* Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.header').removeClass('header--expanded');
        }
    });
});
