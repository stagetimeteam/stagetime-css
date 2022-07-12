(function ($) {

    $('.add-filter__handler').on('click', function () {
        $(this).parents('.add-filter').toggleClass('add-filter--expanded');
    });

    $(document).on('click touchstart', function (event) {
        if (!$(event.target).closest('.add-filter').length) {
            $('.add-filter').removeClass('add-filter--expanded');
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.add-filter').removeClass('add-filter--expanded');
        }
    });


})(jQuery);
