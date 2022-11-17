function solution(brown, yellow) {
    for(let i = 1; i <= yellow; i++){
        
        if(yellow % i === 0 && (brown - 4 - (i * 2)) / 2 === yellow / i ) return [yellow / i + 2 ,i + 2]
    }
}