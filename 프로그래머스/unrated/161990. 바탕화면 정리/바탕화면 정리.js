function solution(wallpaper) {
    return wallpaper.reduce((acc,cur,idx) => {
        if(cur.includes('#')){
            if(acc[0] === -1) acc[0] = idx
            acc[2] = idx + 1
            
            if(acc[1] === -1 || acc[1] > cur.indexOf('#')) acc[1] = cur.indexOf('#')
            if(acc[3] === -1 || acc[3] < cur.lastIndexOf('#') + 1) acc[3] = cur.lastIndexOf('#') + 1
        }
        
        return acc
    }, [-1,-1,-1,-1])
}