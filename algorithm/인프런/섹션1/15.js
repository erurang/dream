function solution(word) {

    const len = word.length

    // console.log((len/2)-1);
    // console.log(len/2);
    // 짝수면
    if (len%2 === 0) return word.slice( (len/2)-1,(len/2)+1)
    // 홀수면
    else return word[Math.floor(len/2)]


    // slice -> (시작점, 끝점(포함x)))
    // substring (6,2) (2,6) 가능.
    // substr ( 시작점, ~개의 글자 반환)
}  

console.log(solution('study'))
console.log(solution('good'))

// console.log('substr');
// console.log('123456'.substr(0));
// console.log('123456'.substr(0,1));
// console.log('123456'.substr(0,2));