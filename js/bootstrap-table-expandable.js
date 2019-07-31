(function ($) {
    $(function () {
        $('.table-expandable').each(function () {
            var table = $(this);
            table.children('thead').children('tr').append('<th></th>');
            table.children('tbody').children('tr').filter(':odd').hide();
            table.children('tbody').children('tr').filter(':even').click(function () {
                $('div.table-expandable-arrow.up').removeClass('up')
                table.children('tbody').children('tr').filter(':odd').hide();
                var element = $(this);
                element.next('tr').toggle('slow');
                element.find(".table-expandable-arrow").toggleClass("up");
            });
            table.children('tbody').children('tr').filter(':even').each(function () {
                var element = $(this);
                element.append('<td><div class="table-expandable-arrow"></div></td>');
            });
        });
    });
})(jQuery); 