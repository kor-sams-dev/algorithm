function solution(chicken) {
    let result = 0
    let coupon = chicken
    while(coupon > 9){
        const newChicken = Math.floor(coupon / 10)
        result += Math.floor(coupon / 10)
        coupon = coupon - newChicken * 10 + newChicken
    }
    return result
}