function solution(sides) {
    const big = sides[0] > sides[1] ? sides[0] : sides[1]
    const small = sides[0] > sides[1] ? sides[1] : sides[0]
    
    let result = 0 
    
    result += (big + 1) - ((big + 1) - small)
    result += small - 1
    
    return small * 2 - 1
}