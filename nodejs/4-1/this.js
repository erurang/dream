// 클래스의 this는 호출한 클래스를 가르킴
// this => A {num : ~}
// this === global => false
class A {
  constructor(n) {
    this.num = n;
  }

  memberFunction() {
    console.log("==class==");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

// 함수내의 this는 global 을 가르킴
// this === global => true
function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

// 그럼 일반 global은 this와 같은가?
console.log("---global---");
console.log(this); // 출력 : {} 다름
console.log(this === global); // 출력 : false

// 즉 브라우저에서 this는 window 를 가르켰는데
// 노드에서의 this는 module.exports를 가르킴
console.log(this === module.exports); // 출력 : true
