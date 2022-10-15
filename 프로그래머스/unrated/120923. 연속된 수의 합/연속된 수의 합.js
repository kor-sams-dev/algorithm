function solution(num, total) {
    const result = []
    let startValue = 0
    if(num % 2 === 0){
        startValue = parseInt(total / num) - (num / 2 - 1)
    } else {
        startValue = total / num - ((num - 1) / 2)
    }
    for(let i = 0; i < num; i++){
        result.push(startValue + i)
    }
    return result
}



