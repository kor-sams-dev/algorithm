function solution(num_list) {
    return +(num_list.reduce((a,c)=>a*c) < Math.pow(num_list.reduce((a,c)=>a+c),2))
}