const http = require("http");
// const http2 = require("http2");

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);

  // res를 해주지 않아서 로딩스피너 계속돔
  res.write("welcome!");
  res.end();
});

// 포트를 열어줌 localhost:8080
server.listen(8080);
