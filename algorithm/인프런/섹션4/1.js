function solution(n,arr) {
    
    // let ans, max = Number.MIN_SAFE_INTEGER

    // for (let x of arr) {
    //     let sum = 0, tmp  = x

    //     while(tmp) {
    //         sum += tmp%10
    //         tmp = Math.floor(tmp/10)
    //     }

    //     if(sum>max) max=sum, ans=x
    //     else if (sum===max && x > ans) ans=x

    // }

    // return ans

    // // 앞을 자릿수합 뒤를 기존값
    const maxNum = [0,0]

    for (let x of arr) {
        
        const splited = (''+x).split('')
        let cnt = 0

        cnt = splited.reduce((a,b) => +a + +b)
        // for (let a of splited) {
        //     cnt += +a
        // }

        if (maxNum[0] < cnt) maxNum[0] = cnt, maxNum[1] = x
        else if (maxNum[0] === cnt && maxNum[1] < x) maxNum[1] = x

        console.log(cnt);
    }

    return maxNum[1]
}   

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));