function solution(i, j, k) {
    let result = ''
    for(let z = i; z <= j; z++){
        result += z
    }
    return result.split(k).length - 1
}