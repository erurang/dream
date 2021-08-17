function solution(arr1,arr2) {
    let left = 0
    let right = 0
    
    let ans = []


    for (let i=0; i< (arr1.length+arr2.length); i++){

        if (arr1[left] < arr2[right]) ans.push(arr1[left]), left++
        else ans.push(arr2[right]), right++
    }
    
    
    
    return ans
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));