$(function () {
    $('#btnSend').on('click', function () {
        //console.log('1212');
        //获取元素的内容
        let text = $('#ipt').val().trim();
        //文字的长度
        if (text.length <= 0)
            return $('#ipt').var().trim();
        //获取ul 插入li 
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>');

        $('#ipt').val('');
        //滚轮
        resetui();
        //调用函数
        getFn(text);
    });
    //发起聊天请求  `getMsg()` 接收一个参数，参数就是用户发送的信息
    function getFn(text) {
        $.get('http://www.liulongbin.top:3006/api/robot',
            {
                spoken: text,//携带的数据
            },
            function (res) {
                console.log(res);
                // 当res.message === 'success' 服务器回应了
                if (res.message === 'success') {
                    //服务器发出的数据内容
                    let msg = res.data.info.text
                    $('#talk_list').append(' <li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>');
                    //滚轮
                    resetui();
                }
            }

        )
    };
    //回车事件 调用
    $('#ipt').on('keyup', function (e) {
        if (e.keyCode === 13) {
            $('#btnSend').click();
        }
    })

})