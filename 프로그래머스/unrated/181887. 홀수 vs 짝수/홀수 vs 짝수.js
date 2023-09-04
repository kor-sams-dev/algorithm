function solution(num_list) {
    return Math.max(...num_list.reduce((a,b,i)=> {
        a[i%2] += b
        return a
    } , [0,0]))
}