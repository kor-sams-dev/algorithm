function solution(s)
{
    let tempString = []
    for(let i = 0; i < s.length; i++){
        if(tempString.length > s.length - i) break
        if(tempString[tempString.length - 1] === s[i]){
            tempString.pop()
        } else {
            tempString.push(s[i])
        }
    }
    return tempString.length > 0 ? 0 : 1
}