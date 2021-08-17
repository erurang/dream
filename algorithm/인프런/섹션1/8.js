function solution(arr) {

    // 2개의 숫자를 뺴는거니깐..
    // 총합에서 2개를 선택하면되네..
    // 7개를 굳이 일일이 선택할 필요가 없음.

    const sum = arr.reduce((a,b) => a+b)
    console.log(sum);
    
    // const m = []

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0 ; j < arr.length; j ++) {

            if( i === j) continue

            
            if((sum- arr[i]-arr[j]) === 100) {
                console.log(arr);
                arr.splice(j,1)
                console.log(arr);
                arr.splice(i,1)
                console.log(arr);
            }

            // if (j>=i) continue   
            // (sum - arr[i] - arr[j] === 100) ? m.push(arr[i],arr[j]) : ""

        }
    }

    // return arr
    // return arr.filter(n => m.indexOf(n) === -1)
}  

console.log(solution([20,7,23,19,10,15,25,8,13]))