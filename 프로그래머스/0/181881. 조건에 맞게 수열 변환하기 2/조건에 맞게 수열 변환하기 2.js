function solution(arr) {
    return recursive(arr, arr.reduce((acc,cur) => acc+cur), 0)
}

const recursive = (arr, prevSum, step) => {
    const {newArr, sum} = arr.reduce((acc, cur, index) => {
        if(cur >= 50 && cur % 2 === 0){
            acc.newArr.push(cur / 2)
        } else if (cur < 50 && cur % 2 === 1){
            acc.newArr.push(cur * 2 + 1)
        } else {
            acc.newArr.push(cur)
        }
        acc.sum += acc.newArr[index]
        return acc;
        
    }, {newArr: [], sum: 0})
    if(prevSum === sum) return step
    
    return recursive(newArr, sum, step + 1)
}