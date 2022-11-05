function solution(answers) {
    const aAnswer = [1,2,3,4,5];
    const bAnswer = [2,1,2,3,2,4,2,5];
    const cAnswer = [3,3,1,1,2,2,4,4,5,5];
    
    let maxIndex = 0 
    
    const answerArr = answers.reduce((a,b,index)=> {
        if(b === aAnswer[index % aAnswer.length]) a[0] += 1
        if(b === bAnswer[index % bAnswer.length]) a[1] += 1
        if(b === cAnswer[index % cAnswer.length]) a[2] += 1
        return a
    }, [0,0,0]).reduce((a,b,index,arr)=>{
        console.log(arr)
        if(index === 0) return a
        if(b === arr[maxIndex]){
            a.push(index+1)
        } else if (b > arr[maxIndex]){
            maxIndex = index
            a = [index+1]
        }
        return a
    },[1])

    
    return answerArr;
}