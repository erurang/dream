function solution(arr) {

    // let answer = 0
    // let min = 10000

    // arr.forEach(n => {
    //     if (n%2 !== 0) {
    //         answer += n
    //         min = Math.min(min,n)
    //     }
    // })

    // console.log(answer,min);
    // return {answer,min}

    let answer = []
    let sum = 0
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let x of arr) {
        if(x%2===1) {
            sum += x
            if (x<min) min = x
        }
    }

    answer.push(sum)
    answer.push(min)
    
    return answer
}

console.log(solution([12,77,38,41,53,92,85]))