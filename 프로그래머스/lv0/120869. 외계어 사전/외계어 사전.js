function solution(spell, dic) {
    const sortedSpellString = spell.sort().join('')
    const dicArr = dic.filter((el)=> el.length === spell.length)
    let result = 2
    for(let i = 0; i < dicArr.length; i++){
        if(sortedSpellString === dicArr[i].split('').sort().join('')){
            result = 1
            break;
        }
    }
    return result
}