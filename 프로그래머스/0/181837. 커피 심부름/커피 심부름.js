function solution(order) {
    return order.reduce((acc,cur) => acc + (cur.includes('latte') ? 5000 : 4500) ,0)
}