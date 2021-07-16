function solution(word,f) {
    let cnt = 0

    for (let x of word) {
        if (x === f) cnt ++
    }

    return word.split(f).length-1 // COMPUTE P OG AMMING  4개가나옴. 
    return cnt
}  

console.log(solution("COMPUTERPROGRAMMING","R"))