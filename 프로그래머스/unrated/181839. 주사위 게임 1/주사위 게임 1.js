function solution(a, b) {
    if(a % 2 === 1 && b % 2 === 1){
        return a * a + b * b
    } else if (a % 2 === 1 || b % 2 === 1) {
        return (a + b) * 2
    } else {
        return Math.abs(a - b)
    }
}