/**
 * Created by 小灰灰 on 2017/9/5.
 ${customer.Address}
 */
$(function () {
    $('.cc').on('keydown', function (e) {
        if (e.keyCode == 13 && e.target.tagName === 'INPUT') {
            var $div = $('<div class="ipcontainer" data-action="container"><input type="text"/><div></div></div>');
            $(e.target).hide().next().html($(e.target).val() + ';')
                .parent().after($div)
            $div.find('input').focus()
        }
    })
        .on('dblclick', function (e) {
            var $target = $(e.target),
                data = $target.data()
            console.log(data);
            if (data && data.action) {
                console.log($(e.target).hide().prev());
                $(e.target).hide().prev().show().focus()
            }
        })
})
