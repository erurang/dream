function solution(str) {

    let ans = ""
    let cnt = 1
    str = str+" "

    for (let i=0; i<str.length-1; i++) {        
        if(str[i] === str[i+1]) cnt++
        else {
            ans += str[i]
            if(cnt > 1) ans += String(cnt)
            cnt = 1
        }
    }

    // 마지막 탐색을 안하니깐 일부로 str을 한칸 더 늘림..

    return ans

    // let ans = ""
    // let cnt = 1
    // let before = ""

    // for (let x of str) {
    //     if (before === "") before = x
        
    //     else if (before === x) cnt++
    //     else if (before !== x) {
    //         if (cnt === 1) ans += before,cnt = 1, before = x 
    //         else ans += before+cnt,cnt = 1, before = x 
    //     }
    // }
    
    // if (cnt === 1) ans += before
    // else ans += before+cnt

    // return ans
}


let str="KKHSSSSSSSE";
console.log(solution(str));