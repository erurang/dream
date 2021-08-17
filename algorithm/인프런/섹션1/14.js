function solution(n,arr) {
    
    let ans = ""

    arr.forEach(n => n.length > ans.length ? ans = n : "")
    
    return ans 
}  

console.log(solution(5,["teacher",'time','student','beautiful','good']))