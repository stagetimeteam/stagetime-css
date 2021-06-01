(function($) {

    $('.happening__filters .type-toggler__widget').on('change', function (){
        $(this).parents('.happening__filters').find('.type-toggler__widget').not( $(this) ).prop('checked', false);
    });

})(jQuery);
