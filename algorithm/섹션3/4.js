function solution(str, target) {
  // const ans = Array.from({ length: str.length }, () => 0);

  // for (let i = 0; i < str.length; i++) {
  //     let tmp = Number.MAX_SAFE_INTEGER
  //     // 현재 위치와 탐색위치를 빼서 가장 가까운 인덱스를 ans에 추가한다.
  //   for (let j = 0; j < str.length; j++) {
  //       if (str[j] === target) {
  //           tmp = Math.min(tmp,Math.abs(j-i))
  //       }
  //   }
  //   ans[i] = tmp
  // }

  // => 오른쪽으로 보면서 체크
  const ans = []
  let cnt = 0

  for (let x of str) {
    
    if (x === target) ans.push(0),cnt=0
    else cnt++,ans.push(cnt)
  }

  // <= 왼쪽으로 보면서 체크
  cnt = 0

  for (let i=str.length-1; i>= 0; i--) {
    if (str[i] === target) cnt = 0
    else {
      cnt++
      ans[i] = Math.min(ans[i],cnt)
    }
  }

  return ans;
}

let str = "teachermode";
console.log(solution(str, "e"));
