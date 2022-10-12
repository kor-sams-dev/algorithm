function solution(num_list, n) {
    const result = []
    for(let i = 1; i <= num_list.length / n; i++){
        const startPoint = (i-1)*n
        result.push(num_list.slice(startPoint,startPoint + n))
    }
    return result
}