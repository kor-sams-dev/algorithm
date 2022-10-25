function solution(n) {
    let afterNumber = 1
    let result = 1
    for(let i = 3; i <= n; i++){
        const tempNumber = result
        result = (result + afterNumber) % 1234567
        afterNumber = tempNumber
    }
    
    return result % 1234567
}