function solution(word) {
    let cnt = 0


    for (let x of word) {
        if (x === x.toUpperCase()) cnt++
    }
    
    // aski code
    // str.charCodeAt() 'a' ~'z' 97~122
    // str.charCodeAt() 'A' ~'Z' 65~90
    

    return cnt
}  

console.log(solution("KoreaTimeGood"))