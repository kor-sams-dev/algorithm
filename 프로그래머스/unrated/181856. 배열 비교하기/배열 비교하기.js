function solution(arr1, arr2) {
    if(arr1.length > arr2.length) return 1
    if(arr2.length > arr1.length) return -1
    const arr1sum = arr1.reduce((a,b)=>a+b)
    const arr2sum = arr2.reduce((a,b)=>a+b)
    if(arr1sum > arr2sum) return 1
    if(arr2sum > arr1sum) return -1
    return 0
}