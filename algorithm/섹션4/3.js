function solution(arr) {
  // (,) 올수있는 경우의 수를 생각
  // 앞에 배열의 갯수 뒤에 배열의 갯수

  let ans = 0;

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let cnt = 0;

      for (let k = 0; k < arr.length; k++) {
        let pi = 0;
        let pj = 0;

        for (let m = 0; m < arr[0].length; m++) {
          if (arr[k][m] === arr[0][i]) pi = m;
          if (arr[k][m] === arr[0][j]) pj = m;
        }

        if (pi > pj) cnt++;
      }

      if (cnt === arr.length) ans++;
    }
  }

  return ans;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
