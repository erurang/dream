function solution(str) {
    let ans = ""

    for (let x of str) {
        if (!isNaN(+x)) ans += ""+x
    }

    return +ans
    
}


let str="g0en2T0s8eSoft";
console.log(solution(str));