function solution(num_list) {
    const result = num_list.reduce((acc,cur) => {
        cur % 2 === 1 ? acc.odd += cur : acc.even += cur
        return acc
    } , {odd: '', even: ''})
    
    return +result.odd + +result.even
}