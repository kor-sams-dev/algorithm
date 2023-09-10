function solution(arr, idx) {
    const result = arr.splice(idx).indexOf(1)
    return result === -1 ? -1 : result + idx
}