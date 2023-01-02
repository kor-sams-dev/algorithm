function solution(denum1, num1, denum2, num2) {
    const denum = denum1 * num2 + denum2 * num1
    const num = num1 * num2
    const result = [denum, num]
    
    for(let i = (denum > num ? denum : num); i > 1; i--){
        if(denum % i === 0 && num % i === 0){
            result[0] /= i
            result[1] /= i
            break
        }
    }
    return result
}