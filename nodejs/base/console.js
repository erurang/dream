console.log("logging...");
// console.clear();

// 브라우저에서 할때는 색깔별로 알려줌
console.log; // 개발
console.info; // 정보
console.warn; // 경보
console.error; // 에러,사용자에러,시스템에러 등..

// assert => 참이 아닐때만 뒤의 문장이 출력됨
console.assert(2 === 3, "not same"); // 출력됨
console.assert(2 === 2, "same");
