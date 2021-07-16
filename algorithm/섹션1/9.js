function solution(word) {
    
    let ans = []
    let ans2 = ""

    for (let x of word) {
        x === 'A' ? ans.push('#') : ans.push(x)
    }

    for (let x of word) {
        if (x === 'A') ans2 += '#'
        else ans2 += x
    }

    // 정규식표현
    word = word.replace(/A/,'#') // B#NANA
    word = word.replace(/A/g,'#') // B#N#N#

    console.log(word);
    return [ans.join(''),ans2]
}  

console.log(solution("BANANA"))