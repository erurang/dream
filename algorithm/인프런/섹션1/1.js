function solution(x,y,z) {

    // 1
    let answer = 0;

    if (x<y) answer = x
    else answer = y

    if (answer<z) return answer
    else return z

    // 2
    return Math.min(x,y,z)
}

console.log(solution(6,5,3))