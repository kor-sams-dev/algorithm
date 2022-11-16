function solution(n, words) {
    var answer = [0, 0];
    
    const tempArray = []
    for(let i = 0; i < words.length; i++){
        const lastWord = tempArray[tempArray.length-1]
        if(tempArray.includes(words[i]) || (lastWord && lastWord[lastWord.length-1] !== words[i][0])){
            answer[0] = i % n + 1
            answer[1] = parseInt(i / n) + 1
            break
        } else {
            tempArray.push(words[i])
        }
    }

    return answer;
}