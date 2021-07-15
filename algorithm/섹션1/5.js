function solution(...args) {

    // 1
    return args.reduce((a,b) => a>b ? b : a)
    // 2
    return Math.min(...args)

}

console.log(solution(5,3,7,11,2,15,17))