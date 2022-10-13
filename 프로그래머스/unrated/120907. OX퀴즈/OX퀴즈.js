function solution(quiz) {
    return quiz.map((el)=>{
        const statement = el.split('=')
        return eval(statement[0]) === parseInt(statement[1]) ? 'O' : 'X'
    });
}