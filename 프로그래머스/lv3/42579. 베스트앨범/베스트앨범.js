function solution(genres, plays) {
  let answer = [];

  let findIndex = 0;
  
  let genreTypes = [];
  
  for(let i = 0; i < genres.length; i++){
    findIndex = genreTypes.findIndex((el)=>el[0] == genres[i])

    if(findIndex===-1){
      genreTypes.push([genres[i], plays[i], [plays[i]]])
    }else{
      genreTypes[findIndex][1] += plays[i]
      genreTypes[findIndex][2].push(plays[i])
    }
  }
  
  genreTypes.sort((a,b)=> b[1] - a[1])

  for(let i = 0; i < genreTypes.length; i++){
    genreTypes[i][2].sort((a,b)=>b-a)
  };

  for(let i = 0; i < genreTypes.length; i++){
    findIndex = -1
    for(let k = 0; k < genreTypes[i][2].length; k++){
      if(k===2) break;
      findIndex = plays.findIndex((el, idx)=> (idx != findIndex) && el==genreTypes[i][2][k])
      answer.push(findIndex)
    }
  }
    
    return answer;
}