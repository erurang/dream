function solution(n,arr) {

    let cnt = 0

    let key = 0

    arr.forEach(n => {
        if (n > key) cnt += 1 , key = n
    })

    return cnt
}

console.log(solution(8,[130,135,148,140,150,150,153])) //5