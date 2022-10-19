function solution(array) {
    const numbers = array.reduce((acc,cur)=> {
        acc[cur] = (acc[cur] ?? 0) + 1
        return acc
    },{})
    
    const sortedNumbers = Object.keys(numbers).sort((a,b)=> numbers[b] - numbers[a])

    return numbers[sortedNumbers[0]] === numbers[sortedNumbers[1]] ? -1 : +sortedNumbers[0]
}