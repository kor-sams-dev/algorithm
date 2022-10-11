function solution(clothes) {
    let clothesType=[];
    let clothesArr=[];
    let breakType;
    
    let typePointer;
    
    for(let i = 0 ; i < clothes.length; i++){
        breakType = false;
        for(typePointer = 0; typePointer < clothesType.length; typePointer++){
            if(clothesType[typePointer] === clothes[i][1]) {
                breakType = true;
                break;
            }
        }
        if(!breakType){
            clothesType.push(clothes[i][1])
            clothesArr.push([clothes[i][0]])
        } else {
            clothesArr[typePointer].push(clothes[i][0] )
        }
    }
    
    return arrTest(clothesArr, 1, 0);;
}

function arrTest(arr, cnt, index){
  let nowCnt = 0;
  let totalCnt = 0 ;
  
  for(let i = index; i < arr.length; i++){
    nowCnt = cnt * arr[i].length;
    totalCnt += nowCnt + arrTest(arr, nowCnt, i+1);
  };
  
  return totalCnt;
}