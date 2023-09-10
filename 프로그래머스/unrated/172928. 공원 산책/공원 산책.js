function solution(park, routes) {
    const startPosition = park.reduce((a,b,idx) => {
        if(b.includes('S')){
            return [idx, b.indexOf('S')]
        }
        return a
    },[0, 0])
    
    return routes.reduce((a,b) => {
        const route = b.split(' ')
        const direction = ['N', 'S'].includes(route[0]) ? 0 : 1
        const movingType = ['E', 'S'].includes(route[0]) ? 1 : -1
        
        const newPosition = [...a]
        newPosition[direction] += +route[1] * movingType
        if(newPosition[direction] < 0 || 
           newPosition[direction] >= (direction === 0 ? park.length : park[0].length)) return a
        
        for(let i = 1; i <= +route[1]; i++){
            const nextH = direction === 1 ? a[0] : a[0] + (i * movingType) 
            const nextW = direction === 0 ? a[1] : a[1] + (i * movingType)
            if(park[nextH][nextW] === 'X') return a
        }
        return newPosition
        
    }, startPosition)
    return startPosition;
}

