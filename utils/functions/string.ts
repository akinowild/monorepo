// 字符串拼接转换为数组 转化为[{url}]
export function strTransformUrlToArray(str:string,domain:string) {
    if (str === '') {
        return []
    }
    return str.split(',').map((url) => ({ url: domain + url.trim() }))
}