function solution(arr) {
  const len = arr.length;
  let cnt = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const list = [arr[i][j]];

      if (i + 1 >= len) list.push(0);
      else list.push(arr[i + 1][j]);

      if (j + 1 >= len) list.push(0);
      else list.push(arr[i][j + 1]);

      if (i - 1 < 0) list.push(0);
      else list.push(arr[i - 1][j]);

      if (j - 1 < 0) list.push(0);
      else list.push(arr[i][j - 1]);

      if (Math.max(...list) === arr[i][j]) console.log(arr[i][j]), cnt++;
    }
  }

  return cnt;
}

function solution(arr) {
  const len = arr.length;
  let cnt = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let flag = 1;

      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < len &&
          ny < len &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }

      if (flag) cnt++;
    }
  }

  return cnt;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr)); // 4 3 2 1 5
