function solution(word) {
    
    let len = word.length
    
    // console.log(len/2); // 5 -> 2.5

    if(len % 2 === 0) return word.substr(len-1,len+1)
    else return word[Math.floor(len)]
}  

console.log(solution('study'))

// console.log('substr');
// console.log('123456'.substr(0));
// console.log('123456'.substr(0,1));
// console.log('123456'.substr(0,2));

// console.log('substring'); // ie도 사용가능함.
// console.log('123456'.substring(0));
// console.log('123456'.substring(0,1));
// console.log('123456'.substring(0,2));