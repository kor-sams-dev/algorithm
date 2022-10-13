function solution(lottos, win_nums) {
    const lottoInfo = lottos.reduce((a,b)=> {
        if(b === 0){
            a.zero += 1
        } else if(win_nums.includes(b)){
            a.same += 1
        } else {
            a.discored += 1
        }
        return a
    }, {zero: 0, same: 0, discored: 0})
    console.log(lottoInfo)
    return [lottoInfo.zero + lottoInfo.same === 0 ? 6 : 7 - (lottoInfo.zero + lottoInfo.same)
            , lottoInfo.zero + lottoInfo.discored === 0 ? 1 : 
            lottoInfo.zero + lottoInfo.discored === 6 ? 6 :
            lottoInfo.zero + lottoInfo.discored + 1]
}