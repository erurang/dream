function solution(arr) {

    // 일단 50%를 쓴다는건.. 합해서 가장 비싼거에 쿠폰을 써야된다는건데
    // 문제가 돈이 딱떨어지게 사는건지.. 아닌건지

    // 일단 싼거부터 고른다.
    // 그러기위해 정렬

    // 그냥 조합만들듯이 하면 되겠네.

    let ans = 0
    
    arr.sort((a,b) => (a[0]+a[1])-(b[0]+b[1]))
    
    for (let i=0; i < arr.length; i++) {
        
        let cnt = 0
        
        let money = 28
        arr[i][0] = arr[i][0]/2
        
        for (let j=0; j< arr.length; j++) {
            const sum = arr[j].reduce((a,b) => a+b)
            if (money - sum >= 0) money -= sum, cnt++
        }

        ans = Math.max(cnt,ans)
        arr[i][0] = arr[i][0]*2
    }

    // 어떻게..? 몇개를 고를지 모르는데 계속 선택을 이어갈것인가..?
    // for (let i=0; i< arr.length; i++) {
        
    //     for (let j=i+1; j< arr.length; j++) {
            
    //         // ..... 연속될거란말이지..?

    //     }

    // }

    

    return ans

}   

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(arr));