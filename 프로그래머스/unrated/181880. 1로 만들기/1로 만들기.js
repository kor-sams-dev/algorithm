function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        let target = cur
        while(target !== 1){
            target = (target - (target % 2 === 0 ? 0 : 1)) / 2
            acc++
        }
        return acc
    }, 0)
}