function solution(n)
{   
    const nStr = n.toString()
    let result = 0;
    for(let i = 0; i < nStr.length; i ++){
        result += parseInt(nStr[i])
    }
    return result;
}