function solution(arr) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if(result.length === 0 || result[result.length -1] < arr[i]){
            result.push(arr[i])
        } else if(result[result.length -1] >= arr[i]){
            result.pop()
            i--
        }
    }
    return result
}