function solution(num,arr) {
    
    const ans = []
    // const dict = {}
    
    // for (let x of arr) {
    //     if (dict[x]) dict[x] += 1
    //     else dict[x] = 1
    // }

    // for (let x of arr) {
    //     if (dict[x] === 1) dict[x] -=1, ans.push(x)
    //     else dict[x] -=1
    // }

    return arr.filter((n,i) => arr.indexOf(n) === i)
    


    
    return ans
}  

console.log(solution(5,['good','time','good','time','student']))