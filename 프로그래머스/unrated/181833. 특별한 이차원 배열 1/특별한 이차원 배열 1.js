function solution(n) {
    const result = []
    const temp = new Array(n).fill(0)
    for(let i = 0; i < n; i++){
        result.push([...temp])
        result[result.length-1][i] = 1
    }
    return result
}