function solution(n) {
    let result = ''
    while(n){
        let target = 0
        if(n % 3 === 0){
            target = 3
            result = 4 + result
        } else {
            target = n % 3
            result = target + result
        }
        n = (n - target) / 3
    }
    return result
}
