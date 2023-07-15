function solution(arr, k) {
    return k%2===1 ? arr.map((el)=>el*k) : arr.map((el)=>el+k)
}