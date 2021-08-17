function solution(str) {

    str = str.toLowerCase()

    // const arr = []

    // for (let x of str) {
    //     arr.push(x)
    // }

    // let ans = true

    // while (true) {
    //     if (arr.length === 1 || arr.length ===0) break

    //     if (arr.shift() !== arr.pop()) {
    //         ans = false 
    //         break
    //     }

    // }

    // if(ans) return "YES"
    // else return "NO"

    
    // 위 과정을 이렇게 처리할수있음
    const arr = str.split("")

    if (str.split("").join('') === str.split("").reverse().join('')) return "YES"
    else return "NO"
    // console.log(arr.reverse());
}


let str="gooG";
console.log(solution(str));