function solution(before, after) {
    console.log(sortString(before), sortString(after))
    return sortString(before) === sortString(after) ? 1 : 0;
}

function sortString(arg){
    return arg.split('').sort().join('');
}