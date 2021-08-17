function solution(word) {
    
    let ans = ""

    for (let x of word) {
        if (x === x.toLowerCase()) ans += x.toUpperCase()
        else ans += x.toLowerCase()


        
    }

    return ans 
}  

console.log(solution('sTUdy'))