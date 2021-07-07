import fs from "fs";

// 이름변경
// fs.renameSync("./text.txt", "./new-text.txt");
// 만약에 위에처럼 했을때 오류(파일이없는) 있을수있으니 try catch

try {
  // 동기적임..
  fs.renameSync("./text.txt", "./new-text.txt");
} catch (e) {
  console.error(e);
}

// 비동기적이기 떄문에 콜백함수로 만들어야함
fs.rename("./new-text.txt", "./text.txt", (e) => console.error(e));
