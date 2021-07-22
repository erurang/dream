function solution(arr) {
  const ans = [];

  for (let x of arr) {
    const num = +x.toString().split("").reverse().join("");
    let isPrime = true;

    // 소수판별
    if (num === 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= parseInt(num/2); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) ans.push(num);
  }

  return ans;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
