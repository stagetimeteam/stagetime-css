(function($) {

    $('.js-example-basic-multiple').select2({
        tags: true,
        createTag: function (params) {
            return {
                id: params.term,
                text: params.term,
                newOption: true
            };
        },
        templateResult: function (data) {
            if (data.newOption) {
                var $result = $('<div>' + data.text + ' <span class="added-by-you">(added by you)</span></div>');
                return $result;
            }
            return data.text;
        }
    });

})(jQuery);
