// RCJA, TFMN
const CHARACTER_TYPE = [['R','T'], ['C','F'],['J','M'],['A','N']]

function solution(survey, choices) {
    const result = choices.reduce((record, score, index)=>{
        if(score === 4) return record
        
        const targetScore = Math.abs(score - 4)
        const targetType = survey[index][score < 4 ? 0 : 1]
        
        if(record[targetType]){
            record[targetType] += targetScore
        } else {
            record[targetType] = targetScore
        }
        
        return record
    }, {})
    
    return CHARACTER_TYPE.reduce((answer, type)=>{
        const frontIndex = (result[type[0]] || 0)
        const backIndex = (result[type[1]] || 0)
        
        if(backIndex > frontIndex) {
            answer = answer + type[1]
        } else {
            answer = answer + type[0]
        }
        
        return answer
    },'')
}