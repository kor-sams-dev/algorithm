function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        for(let k = queries[i][0]; k <= queries[i][1]; k++){
            arr[k]++
        }
    }
    return arr
}