function solution(numbers) {
    const numbersString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    return parseInt(numbersString.reduce((a,b,index)=>{
        return a.replace(new RegExp(b,'g'), index)    
    },numbers))
    
}