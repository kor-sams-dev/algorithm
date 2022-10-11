function solution(order) {
    return String(order).split('').reduce((a,b)=> ['3','6','9'].includes(b) ? a+1 : a ,0)
}