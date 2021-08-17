function solution(n, arr) {
  //   let rate = [];

  //   for (let i = 0; i < n; i++) {
  //     rate.push([arr[i], i]);
  //   }

  //   for (let i = 0; i < n; i++) {
  //     let cnt = n;

  //     for (let j = 0; j < n; j++) {
  //       if (i === j) continue;
  //       if (rate[i][0] > rate[j][0]) cnt--;
  //       if (rate[i][0] === rate[j][0]) cnt--;
  //     }

  //     rate[i][1] = cnt;
  //   }

  //   console.log(rate);
  let n = arr.length;
  
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

console.log(solution(5, [87, 89, 92, 100, 76])); // 4 3 2 1 5
console.log(solution(5, [87, 87, 87, 100, 76]));
