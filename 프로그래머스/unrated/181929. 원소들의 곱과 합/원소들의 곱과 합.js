function solution(num_list) {
    const mul = num_list.reduce((a,c)=>a*c)
    const sum = num_list.reduce((a,c)=>a+c)
    return +(mul < sum*sum)
}