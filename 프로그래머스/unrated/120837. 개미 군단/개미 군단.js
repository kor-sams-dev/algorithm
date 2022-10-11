function solution(hp) {
    let leftHp = hp
    
    let result = 0
    result += parseInt(leftHp / 5)
    leftHp = leftHp % 5
    
    result += parseInt(leftHp / 3)
    leftHp = leftHp % 3
    
    return result + leftHp
    
}