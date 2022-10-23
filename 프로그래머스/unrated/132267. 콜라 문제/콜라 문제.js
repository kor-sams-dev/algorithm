function solution(a, b, n) {
    let tempN = n
    let result = 0
    while(tempN / a >= 1){
        const changeBottle = parseInt(tempN / a)
        result += changeBottle * b
        
        tempN = tempN - changeBottle * a + changeBottle * b
    }
    
    return result
}