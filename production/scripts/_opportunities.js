(function($) {

   $('.opportunities__show-filters').on('click', function () {
      $('.opportunities').addClass('opportunities--filters-expanded');
   });

   $('.opportunities__top-close').on('click', function () {
      $('.opportunities').removeClass('opportunities--filters-expanded');
   });

   $('.opportunities__bottom-close').on('click', function () {
      $('.opportunities').removeClass('opportunities--filters-expanded');
   });

   $(document).on('keyup', function (event) {
      if (event.keyCode === 27) {
         $('.opportunities').removeClass('opportunities--filters-expanded');
      }
   });

})(jQuery);
