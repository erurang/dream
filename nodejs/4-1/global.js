// 브라우저에서는 window가 글로벌객체
// 노드에서는 global이 global 객체

const filesystem = require("fs");

console.log(global);

global.hello = () => {
  console.log("hello");
};

global.hello();
hello();
