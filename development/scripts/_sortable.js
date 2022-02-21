$(document).ready(function () {

    var el = document.querySelectorAll('.sortable');

    [].forEach.call(el, function (item) {
        Sortable.create(item, {
            animation: 150
        });
    });

});
