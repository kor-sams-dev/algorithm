function solution(arr) {
    let resultLength = 1;
    while(arr.length > resultLength){
        resultLength *= 2
    }
    
    arr.push(...new Array(resultLength - arr.length).fill(0))
    return arr
}