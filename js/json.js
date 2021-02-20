//封装函数
function run(obj) {
    let arr = [];
    for (const key in obj) {
        arr.push(`${key}=${obj[key]}`);
    }
    //拼接数组转换为字符串  join:数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的
    return arr.join('&');
}
//调用函数 赋值
// run({ name: 'it', age: 12 });

//再次调用it
function it(options) {
    var xhr = new XMLHttpRequest()
    console.log(options);
    // 把外界传递过来的参数对象，转换为 查询字符串
    var qs = run(options.data)
    //发起get请求
    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs);
        xhr.send();
        //发起post请求
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
    }
    // 注册监听
    xhr.onreadystatechange = function () {
        // 注册监听
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 把服务器的json字符串转成js对象
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}
