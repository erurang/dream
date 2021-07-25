function solution(target,arr) {
    
    // 위코드처럼 했을때 일단,
    // 매번 slice를 통해서 자르고 매 수행마다 r-1/r-l번을 수행함, 그래서 이건 투포인터라고 보기어려움.

    // let left = 0
    // let right = 1
    // let cnt = 0
    
    // while (left < arr.length && right <arr.length) {
    //     if (arr.slice(left,right+1).reduce((a,b) => a+b) === target) {
    //         cnt++
    //         left++
    //         right = left+1
    //     } 
    //     else if (arr.slice(left,right+1).reduce((a,b) => a+b) < target) {
    //         right++
    //     } else if (arr.slice(left,right+1).reduce((a,b) => a+b) > target) {
    //         left++
    //     }

    // }

    let cnt = 0
    let sum = 0

    let l =0
    let r = 0

    while (l<=r) {
        sum += arr[r]
        
        if (sum < target) r++
        else if (sum > target) sum -= arr[l++]
        else cnt++
        console.log(sum);
    } 
    
    return cnt
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));