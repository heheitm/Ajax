$(function () {
    function get() {
        $.get('http://www.liulongbin.top:3006/api/cmtlist',
            function (res) {
                console.log(res);
                if (res.status != 200) return alert('s');
                let html = [];
                res.data.forEach(function (item) {
                    html +=  '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>'
                })
                $('#cmt-list').html(html);
            }
        )
    }
    get();
    $('#formAddCmt').on('submit', function (e) {
        e.preventDefault();
        const str = $(this).serialize();
         console.log(str);
        $.post('http://www.liulongbin.top:3006/api/addcmt', str, function (res) {
            if (res.status != 201) return alert('sajckvhj');
            get();
        })
    })
})