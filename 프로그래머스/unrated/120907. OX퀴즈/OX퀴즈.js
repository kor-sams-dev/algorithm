function solution(quiz) {
    return quiz.map((el)=>{
        const statement = el.split('=')
        const element = statement[0].split(' ')
        return parseInt(element[0]) + (element[1] === '-' ? -1 * parseInt(element[2]) : parseInt(element[2])) === parseInt(statement[1]) ? 'O' : 'X'
    });
}