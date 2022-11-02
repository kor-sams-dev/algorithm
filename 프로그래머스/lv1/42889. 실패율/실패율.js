function solution(N, stages) {
  const answer = [];
  const result = [];
    
  for (let i = 1; i <= N; i++) {
    let user = 0;
    let userFail = 0;
    stages.map((el) => {
      if (el >= i) user++;
      if (el === i) userFail++;
    });
    answer.push({ stage: i, fail: user === 0 ? 0 : userFail / user });
  }

  answer.sort((a, b) => {
    if (b.fail - a.fail === 0) {
      return a.stage - b.stage;
    } else {
      return b.fail - a.fail;
    }
  });
    
  answer.map((el)=>{
      result.push(el.stage)
  })
  return result;
}