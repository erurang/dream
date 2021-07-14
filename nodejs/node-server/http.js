const http = require("http");
// const http2 = require("http2");

// html파일을 가져오기위해
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming...");
  // console.log(req.headers);
  // console.log(req.httpVersion);

  // console.log(req.method);

  // console.log(req.url);

  const url = req.url
  
  if (url === '/') {
    
    res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title>Academy</title></head>')
    // res.write('<body><h1>Welcome!</h1></body>')
    // res.write('</html>')

    const read = fs.createReadStream("./http1.html").pipe(res)

  } else if (url === '/courses') {
    res.write('Courses')
  } else {
    res.write('Not Found')
  }

  // res를 해주지 않아서 로딩스피너 계속돔
  // res.end();
});

// 포트를 열어줌 localhost:8080
server.listen(8080);
