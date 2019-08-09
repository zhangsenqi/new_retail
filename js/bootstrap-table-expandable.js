(function ($) {
    $(function () {
        $('.table-expandable').each(function () {
            var table = $(this);
            table.children('thead').children('tr').append('<th></th>');
            table.children('tbody').children('tr').filter(':odd').hide();
            table.children('tbody').children('tr').filter(':even').click(function () {
                var element = $(this);
                var is_up = element.children('td').eq(5).children('div').attr('class').indexOf('up');
                $('div.table-expandable-arrow.up').removeClass('up')
                table.children('tbody').children('tr').filter(':odd').hide();
                is_up === -1 && element.next('tr').toggle(100);
                is_up === -1 && element.find(".table-expandable-arrow").toggleClass("up");
            });
            table.children('tbody').children('tr').filter(':even').each(function () {
                var element = $(this);
                element.append('<td><div class="table-expandable-arrow"></div></td>');
            });
        });
    });
})(jQuery); 