$(function () {
    function run() {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/getbooks',

            success: function (res) {
                if (res.status != 200) return alert('错误');

                let html = null;
                res.data.forEach((item) => {
                    console.log(res.data);
                    html += ``
                });
                $('tbody').html(html);
            },
        })
    };
    run();
    $('tbody').on('click', '.del', function () {
        //获取idid
        const id = $(this).data('id');
        console.log(id);
        $.get('http://www.liulongbin.top:3006/api/delbook',
            {
                data: id,
            },
            function (res) {
                if (res.status != 200) return alert('错误');
                //重新渲染
                run();
            }
        )
    });
    //添加事件
    $('#btnAdd').on('click', function () {

        var ipt1 = $('#iptBookname').val().trim();
        var ipt2 = $('#iptAuthor').val().trim();
        var ipt3 = $('#iptPublisher').val().trim();

        $.post('http://www.liulongbin.top:3006/api/addbook',
            {
                bookname: ipt1,
                author: ipt2,
                publisher: ipt3,
            },
            function (res) {
                if (res.status != 201) return alert('错误');
                //添加事件后 再重新渲染
                run();
                $('#iptBookname').val('');
                $('#iptAuthor').val('');
                $('#iptPublisher').val('');
            }
        )
    })

})