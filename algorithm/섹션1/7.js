function solution(day, arr) {
    let answer = 0

    for (let x of arr) {
        
        // number를 string으로 변환해줌
        // const a = x.toString()
        // a[a.length-1] === day.toString() ? answer +=1 : ""

        // x자체가 숫자니까 %를 사용해서 자릿수를 조정함.
        // 원리는 아래와 같음
        // 10을 나눠서 나누어덜어지는것이 1의자리수임.
        // 10%10 = 0
        // 11%10 = 1

        if(x%10 === day ) answer += 1
    }

    
    return answer
}

console.log(solution(3,[25,23,11,47,53,33]))
console.log(solution(0,[12,20,54,30,87,81,30]))