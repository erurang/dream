import fs from "fs";

// file read
fs.promises
  .readFile("./text.txt")
  .then((d) => console.log(d))
  .catch((e) => console.log(e));
// => buffer 데이터 형태로 읽어오게됨

// buffer 를 인코딩시킴
fs.promises
  .readFile("./text.txt", "utf-8")
  .then((d) => console.log(d))
  .catch((e) => console.log(e));

// 파읽쓰기 파일내용이 덮어씌워짐
fs.promises
  .writeFile("./text.txt", "ㅋㅋㅋㅋ가나다라마바사")
  .catch((e) => console.log(e));

// 덮어씌우지않고 옆에 붙임
fs.promises
  .appendFile("./text.txt", "덮어ㅡ씨움싀움")
  .catch((e) => console.log(e));

// 복사
// 하지만 코드는 비동기적이기때문에 text.txt의 데이터를 읽기전에 복사햇을수도있음.
fs.promises.copyFile("./text.txt", "./file2.txt").catch((e) => console.log(e));

fs.promises
  .appendFile("./text.txt", "덮어ㅡ씨움싀움")
  .then(() =>
    fs.promises
      .copyFile("./text.txt", "./file3.txt")
      .catch((e) => console.log(e))
  )
  .catch((e) => console.log(e));

//make folder
fs.promises.mkdir("sub-folder").catch((e) => console.log(e));

// 현재경로의 파일이름들을 알수있음
fs.promises.readdir("./").then((d) => console.log(d));
