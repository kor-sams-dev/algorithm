function solution(numbers, n) {
    let result = 0
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i]
        if(result > n) return result
    }
}