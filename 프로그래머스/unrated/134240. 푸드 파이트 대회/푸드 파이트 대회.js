function solution(food) {
    var answer = '0';
    for(let i = food.length - 1; i >= 1; i--){
        const foodString = String(i).repeat(parseInt(food[i]/2))
        answer = foodString + answer + foodString
    }
    return answer;
}