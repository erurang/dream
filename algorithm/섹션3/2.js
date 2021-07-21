function solution(str) {

    str = str.toLowerCase()

    console.log(str.replace(/[^a-z]/g,''))
    // let p = ""

    // for (let a of str) {
    //     // 알파벳인지 판별..
    //     if (65 <= a.charCodeAt() && a.charCodeAt() <= 90 || 97 <= a.charCodeAt() && a.charCodeAt() <= 122) {
    //         p+=a
    //     }
    // }
    
    // p = p.toLowerCase()

    // if(p === p.split("").reverse().join('')) return "YES"
    // else return "NO"

       
}


let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));