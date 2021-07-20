function solution(n,arr) {

    const ans = []

    ans.push(arr[0])
    
    for (let i = 1; i < arr.length; i++) {
        
        if ( arr[i] > arr[i-1]) ans.push(arr[i])
    }

    return ans
}

console.log(solution(6,[7,3,9,5,6,12])) // 7 9 6 12