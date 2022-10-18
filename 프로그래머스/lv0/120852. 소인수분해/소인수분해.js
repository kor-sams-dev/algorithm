function solution(n) {
    const resultSet = new Set()
    while(n > 1){
        for(let i = 2; i <= n; i++){
            if(n % i === 0) {
                resultSet.add(i)
                n /= i
                break
            }
        }
    }
    return Array.from(resultSet)
}