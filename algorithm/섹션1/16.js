function solution(word) {
    
    let ans = ""
    // const dict = {}

    // for (let x of word) {
    //     if (dict[x]) dict[x] +=1
    //     else dict[x] = 1
    // }

    // for (let x of word) {
    //     if (dict[x] === 1) ans += x, dict[x] -=1
    //     else dict[x] -= 1
    // } 


    for (let i = 0; i< word.length; i ++) {
        console.log(word[i],i,word.indexOf(word[i]));
        // indexOf는 처음발견된 인덱스번호를 돌려줌 
        // 그러니깐 word[i]와 for 인덱스의 숫자가 같다는건 처음 발견된것이라는뜻.
                if (word.indexOf(word[i]) === i) ans += word[i]
    }

    return ans
}  

console.log(solution('ksekkset'))