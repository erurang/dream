function solution(arr1,arr2) {
    
    const ans = []

    let l = 0
    let r = 0

    arr1 = arr1.sort((a,b) => a-b)
    arr2 = arr2.sort((a,b) => a-b)
    
    while (l < arr1.length && r < arr2.length) {
        if (arr1[l] === arr2[r]) ans.push(arr1[l++]), r++
        else if (arr1[l] > arr2[r]) r++
        else l++
    }

    return ans
    // return arr1.filter(n => arr2.includes(n)).sort((a,b)=>a-b)
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));