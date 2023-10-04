function solution(arr, queries) {
    queries.forEach((el) => {
        el.sort()
        const temp = arr[el[0]]
        arr.splice(el[0], 1, arr[el[1]])
        arr.splice(el[1], 1, temp)
    })
    return arr
}