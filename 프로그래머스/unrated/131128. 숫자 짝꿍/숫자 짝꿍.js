function solution(X, Y) {
    const xObject = X.split('').reduce((a,b) => {
        if(a[b]){
            a[b] = a[b] + 1
        }else{
            a[b] = 1
        }
        return a
    },{})
    
    const yObject = Y.split('').reduce((a,b) => {
        if(a[b]){
            a[b] = a[b] + 1
        }else{
            a[b] = 1
        }
        return a
    },{})
    
    const result = Object.keys(xObject).sort((a,b)=>b-a).reduce((a,b)=>{
      if(yObject[b]){
        a += b.repeat(xObject[b] < yObject[b] ? xObject[b] : yObject[b])
      }
      return a
    },'')
    
    return result === '' ? '-1' : result[0] === '0' ? '0' : result
}