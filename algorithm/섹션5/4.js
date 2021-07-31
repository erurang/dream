function solution(n, arr) {
  let cnt = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    // 일단 합을더하고
    sum += arr[rt];

    // 아래면 카운트를올리고
    if (sum <= n) cnt++, console.log("위", sum);
    // 크면
    else if (sum > n) {
      console.log("아래", sum);
      // 작거나 같아질때까지 줄임
      // 1312
      while (sum >= n) {
        // 1312 => 312
        // 312 => 12
        sum -= arr[lt++];
        if (sum <= n) cnt++;
        console.log("와일", sum, cnt);
      }
    }
  }

  return cnt;
}

// 131
//

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

// function solution(n, arr) {
//   let cnt = 0;
//   let r = 1;

//   while (r <= arr.length) {
//     for (let i = 0; i <= arr.length - r; i++) {
//       if (arr.slice(i, i + r).reduce((a, b) => a + b) <= n) {
//         cnt++;
//       }
//     }
//     r++;
//   }

//   return cnt;
// }

// let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));
