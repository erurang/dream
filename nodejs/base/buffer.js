// 버퍼는 고정된 사이즈의 메모리 덩어리다.
// 숫자의 배열이다

// 'hi' 라는 문자를 메모리에 올릴때 어떻게 저장되는가?
const buf = Buffer.from("Hi");

// 유니코드 형태로 각 문자가 표현된걸 볼수있음
console.log(buf);
console.log(buf.length);

// 배열로 접근하면 buf의 유니코드 형태가아니라 아스키코드 형태로 돌려줌
console.log(buf[0]);
console.log(buf[1]);
//
console.log(buf.toString());

// 만들기

// 사이즈가 2인 버퍼를 만듬
const buf2 = Buffer.alloc(2);
// 기존의 데이터가 있으나 초기화가 안된 버퍼 빠르지만 데이터가 들을수도있으니 위험..
const buf3 = Buffer.allocUnsafe(2);
console.log(buf2, buf3);
