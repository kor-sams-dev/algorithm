function solution(s) {
    const sortingArray = s.split(' ').sort((a,b) => +a - +b)
    return sortingArray[0] + ' ' + sortingArray[sortingArray.length - 1]
}