function solution(arr) {

    // const ans = []
    // 중복제거를위해 
    let ans = new Set()
    
    for (let i = 0; i < arr.length-2; i++) {
        
        for (let j=i+1; j <arr.length-1; j++) {
            
            for (let k=j+1; k<arr.length; k++) {
                // ans.push(arr[i]+arr[j]+arr[k])
                ans.add(arr[i]+arr[j]+arr[k])

            }
        }
    }

    ans = [...ans]
    ans.sort((a,b) => b-a)

    return ans

}   

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr));