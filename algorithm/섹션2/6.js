function solution(arr) {
  let maxNum = 0;
  // 가로

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let sum2 = 0
    for (let j = 0; j < arr.length; j++) {
      sum += arr[i][j];
      sum2 += arr[j][i]
    }
    maxNum = Math.max(maxNum, sum,sum2);
  }

  // 세로
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       sum += arr[j][i];
//     }
//     maxNum = Math.max(maxNum, sum);
//   }

  // \ 대각선
  let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
    sum2 += arr[i][arr.length-1-i]
  }

  maxNum = Math.max(maxNum, sum, sum2);
//   sum = 0;

  // / 대각선

  // 0,4 1,3 2,2 3,1 4,0

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][arr.length - 1 - i];
//   }
//   maxNum = Math.max(maxNum, sum);
//   console.log(sum);

  return maxNum;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 4 3 2 1 5

//
