function solution(bridge_length, weight, truck_weights) {
    if(bridge_length === 1) return truck_weights.length
    
    const a = truck_weights.reduce((preInfo, truckWeight)=>{
        if(weight >= preInfo.nowWeight + truckWeight){
            preInfo.time += 1
            preInfo.nowWeight += truckWeight
            
            preInfo.nowCrossTrucks = preInfo.nowCrossTrucks.reduce((a,b)=>{
                if(b.leftTime === 1){
                    preInfo.nowWeight -= b.truckWeight
                } else {
                    b.leftTime -= 1
                    a.push(b)    
                }
                
                return a
            },[])
            
            preInfo.nowCrossTrucks.push({truckWeight, leftTime: bridge_length})
        } else {
            let passTruckIndex = 0
            let passTruckWeight = 0 
            
            for(let i = 0; i < preInfo.nowCrossTrucks.length; i++){
                passTruckWeight += preInfo.nowCrossTrucks[i].truckWeight
                if(weight >= preInfo.nowWeight + truckWeight - passTruckWeight){
                    passTruckIndex = i
                    break;
                }
            }
            
            const increaseTime = preInfo.nowCrossTrucks[passTruckIndex].leftTime
            
            preInfo.time += increaseTime
            preInfo.nowWeight = preInfo.nowWeight + truckWeight - passTruckWeight
            preInfo.nowCrossTrucks.splice(0, passTruckIndex + 1)
            
            preInfo.nowCrossTrucks = preInfo.nowCrossTrucks.reduce((a,b)=>{
                b.leftTime -= increaseTime
                a.push(b)
                return a
            },[])
            
            preInfo.nowCrossTrucks.push({truckWeight, leftTime: bridge_length})
        }
        
        return preInfo
    },{time: 0, nowWeight: 0, nowCrossTrucks: []})
    
    return a.time + a.nowCrossTrucks[a.nowCrossTrucks.length - 1].leftTime
}

