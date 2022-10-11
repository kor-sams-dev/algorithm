function solution(record) {
    const changeNames = record.reduce((a,b)=>{
        const splitB = b.split(' ')
        if(splitB[0] !== 'Leave') {
          a[splitB[1]] = splitB[2]
        }
        return a
    },{})

    return record.reduce((a,b)=> {
        const splitB = b.split(' ')
        if(splitB[0] !== 'Change') {
            a.push(`${changeNames[splitB[1]] || splitB[2] }님이 ${splitB[0] === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`)
        }
        return a
    },[])
}