function solution(my_string) {
    const stringArray = my_string.split(' ')
    let result = +stringArray[0]
    for(let i = 1; i < stringArray.length; i += 2){
        if(stringArray[i] === '-'){
            result -= +stringArray[i+1]
        } else {
            result += +stringArray[i+1]
        }
    }
    return result
}