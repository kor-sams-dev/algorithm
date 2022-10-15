function solution(numbers) {
    const numbersString = [
        {string: "zero", value: 0}, 
        {string: "seven", value: 7},
        {string: "three", value: 3},
        {string: "eight", value: 8},
        {string: "nine", value: 9},
        {string: "four", value: 4},
        {string: "five", value: 5},
        {string: "one", value: 1},
        {string: "two", value: 2},
        {string: "six", value: 6}
    ];
    
    return parseInt(numbersString.reduce((a,b)=>{
        const re = new RegExp(b.string,'g')
        return a.replace(re, b.value)    
    },numbers))
    
}