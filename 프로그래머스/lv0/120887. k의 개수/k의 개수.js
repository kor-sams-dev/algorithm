function solution(i, j, k) {
    let result = 0
    for(let z = i; z <= j; z++){
        result += String(z).split('' + k).length - 1
    }
    return result
}