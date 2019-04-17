function getRequest(key) {
    var arr = decodeURI(location.search).replace('?', '').split('&')
    for (let index = 0; index < arr.length; index++) {
        if (key == arr[index].split('=')[0]) {
            return arr[index].split('=')[1]
        }
    }
    return ''
}