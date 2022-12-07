function solution(fees, records) {
    const recordsChange = records.reduce((acc, cur) => {
        const [time, carNumber, type] = cur.split(' ')
        if(type === 'IN'){
            const changeTimeNumber = changeTime(time)
            if(!acc[carNumber]) acc[carNumber] = {}
            acc[carNumber].inTime = changeTimeNumber 
            acc[carNumber].currentTime = 1439 - changeTimeNumber 
        } else {
            acc[carNumber].totalTime = (acc[carNumber].totalTime ?? 0) + changeTime(time) - acc[carNumber].inTime
            acc[carNumber].currentTime = 0
        }
        return acc
    }, {})

    const cars = Object.keys(recordsChange).sort((a,b) => a - b)
    return cars.map((car) => {
        const record = recordsChange[car]
        const feeTime = (record.totalTime ?? 0) + record.currentTime
        return fees[1] + Math.ceil(feeTime < fees[0] ? 0 : (feeTime - fees[0]) / fees[2]) * fees[3]
    })
}

const changeTime = (timeString) => {
    const [hour, min] = timeString.split(':')
    return parseInt(hour) * 60 + parseInt(min)
}