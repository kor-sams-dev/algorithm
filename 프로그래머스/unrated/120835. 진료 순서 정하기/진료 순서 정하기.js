function solution(emergency) {
    const sortingEmergency = [...emergency].sort((a,b)=>b-a)
    
    return emergency.map((el)=>sortingEmergency.indexOf(el)+1)
}