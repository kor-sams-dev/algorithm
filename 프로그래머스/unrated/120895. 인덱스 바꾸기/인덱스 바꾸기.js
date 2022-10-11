function solution(my_string, num1, num2) {
    const stringArray = my_string.split('')
    const firstString = stringArray[num1]
    const secondString = stringArray[num2]
    
    stringArray[num2] = firstString
    stringArray[num1] = secondString
    
    return stringArray.join('') 
}