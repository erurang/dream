function solution(x,y,z) {
    // 삼각형에서 가장 긴 변의 길이는 나머지 두 변의 길이의 합보다 작다.
    
    // 1
    let answer = 'YES'
    let tot = x+y+z
    let maxNum = 0

    if (x>y) maxNum = x
    else maxNum = y

    if (z > maxNum) maxNum = z

    if (tot-maxNum > maxNum) return answer
    else return "NO"
    

    // 2
    const maxNum = Math.max(x,y,z)
    const array = [x,y,z].filter(n => n !== maxNum)
    const minSum = array.reduce((a,b) => a+b)
    if (maxNum < minSum) return 'YES'
    else return 'NO'
    
}

console.log(solution(6,7,11))
console.log(solution(13,33,17))