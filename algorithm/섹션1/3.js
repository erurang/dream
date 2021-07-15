function solution(num) {

    // ceil은 뒤에 소수점남으면 강제로 반올림함
    Math.ceil(2.111) // 3

    // round는 반올림
    Math.round(2.111) // 2
    Math.round(2.5) // 3

    // floor는 소수점 남으면 강제로 내림
    Math.floor(2.111) // 2
    Math.floor(2.8) // 2
    //  제곱근
    Math.sqrt(16) // 4

    // 고로 이문제는 Num을 12로나눈후에 소수점이 남으면 한다스를 더 뜯어야한다는 뜻으로 ceil을 쓰면됨
    return Math.ceil(num/12)


    let das = 12
    let answer = 0

    while (true) {
        if (das <= num || num > 0) num -= 12 , answer += 1
        else break
    }

    return answer
}

console.log(solution(25))
console.log(solution(178))