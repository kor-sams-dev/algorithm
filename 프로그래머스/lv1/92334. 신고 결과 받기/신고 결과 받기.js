function solution(id_list, report, k) {
    var answer = [];
    const reportObject = Array.from(new Set(report)).reduce((a,b)=>{
        const reportInfo = b.split(' ')
        if(a[reportInfo[1]]){
            a[reportInfo[1]].reportUser.push(reportInfo[0])
        } else {
            a[reportInfo[1]] = {
                count: 0,
                reportUser: [reportInfo[0]]
            }
        }
        a[reportInfo[1]].count += 1
        
        return a
    },{});
    
    const reportMailInfo = Object.keys(reportObject).reduce((a,b)=>{
        if(reportObject[b].count >= k){
            reportObject[b].reportUser.forEach((el)=>{
                a[el] = ++a[el] || 1
            })   
        }
        return a
    },{})
    
    return id_list.map((el) => reportMailInfo[el] || 0);
}