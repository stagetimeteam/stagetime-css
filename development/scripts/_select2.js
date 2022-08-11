(function($) {

    /* default: */

    $('.select2--default').select2();


    /* tagging: */

    $('.select2--tagging').select2({
        tags: true,
        placeholder: "Role, Title, or Position *",
        createTag: function (params) {
            return {
                id: params.term,
                text: params.term,
                newOption: true
            };
        },
        templateResult: function (data) {
            if (data.newOption) {
                return $('<div>' + data.text + ' <span class="added-by-you">(added by you)</span></div>');
            }
            return data.text;
        }
    });

})(jQuery);
