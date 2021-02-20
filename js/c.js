function template(id, data) {
    var str = document.getElementById(id).innerHTML
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/g

    str = str.replace(pattern, (math, key) => {
        console.log(data[key]);
        return data[key];
    })

    return str
}