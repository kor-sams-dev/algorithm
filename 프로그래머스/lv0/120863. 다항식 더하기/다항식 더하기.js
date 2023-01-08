function solution(polynomial) {
    const temp = polynomial.split('+').reduce((a,b)=>{
        if(b.includes('x')){
            const number = b.replace('x','')
            if(number.trim() === ''){
                a.variable++
            } else {
                a.variable += +number
            }
        }else{
            a.constant += +b
            
        }
        return a
    },{constant:0, variable:0})
    
    return (temp.variable > 0 ? (temp.variable > 1 ? temp.variable : '' ) + 'x' : '') 
        + (temp.constant > 0 && temp.variable > 0 ? ' + ' : '') 
        + (temp.constant > 0 ? temp.constant : '')
}