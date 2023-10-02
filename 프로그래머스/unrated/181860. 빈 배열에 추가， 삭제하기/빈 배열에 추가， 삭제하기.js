function solution(arr, flag) {
    return arr.reduce((acc, cur, idx) => {
         return flag[idx] ? [...acc, ...(new Array(cur * 2)).fill(cur)] : acc.slice(0, -cur)
    },[])
}