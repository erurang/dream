function solution(n,arr) {

    let cnt = 1
    let sum = 0

    arr.forEach(n => {
        if (n !== 0) sum += cnt, cnt ++
        else cnt = 1
    })

    return sum

}

console.log(solution(10,[1,0,1,1,1,0,0,1,1,0])) // 10