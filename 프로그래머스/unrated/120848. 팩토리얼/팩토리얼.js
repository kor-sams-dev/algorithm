function solution(n) {
    let result = 1
    while(1){
        if(n / result < 1) {
            break
        }
        n /= result++
    }
    return result - 1
}