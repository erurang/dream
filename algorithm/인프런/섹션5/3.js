function solution(target, arr) {
  // 시간복잡도가 O(n^2)

  let l = 0;
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) {
      cnt++;
      sum -= arr[l++];
    } else if (sum > target) {
      while (sum > target) {
        sum -= arr[l++];
      }

      if (sum === target) cnt++, (sum -= arr[l++]);
    }
    console.log(`결과 : index : ${i}, sum : ${sum}, cnt : ${cnt}`);
    console.log("====");
  }

  return cnt;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
