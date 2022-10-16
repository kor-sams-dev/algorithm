function solution(dots) {
    let result = 1
    for(let i = 0; i < dots.length; i++){
        if(dots[0][0] !== dots[i][0] && dots[0][1] !== dots[i][1]){
            result *= (Math.abs(dots[0][1] - dots[i][1])) * (Math.abs(dots[0][0] - dots[i][0]))
            break;
        }
    }
    return result 
}