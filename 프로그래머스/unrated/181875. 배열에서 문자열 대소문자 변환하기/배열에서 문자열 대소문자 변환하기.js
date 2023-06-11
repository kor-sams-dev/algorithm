function solution(strArr) {
    return strArr.map((arr, index) => index % 2 === 1 ? arr.toUpperCase() : arr.toLowerCase())
}