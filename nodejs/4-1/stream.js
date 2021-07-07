import fs from "fs";

const beforeMemory = process.memoryUsage().rss;
console.log(beforeMemory);

fs.readFile("./streamtxt.txt", (_, data) => {
  // 파일을 다 읽은다음
  // 새로운 파일에 씀
  fs.writeFile("./file2.txt", data, () => {});

  // 이 방법의 문제는 모든 데이터를 다 읽은다음
  // 새로운 파일을 쓰기때문에 매우 비효율적
  // 파일크기가 메모리보다 클수도있고.. 여러 가능성
  const afterMemory = process.memoryUsage().rss;
  console.log(afterMemory);

  const diff = afterMemory - beforeMemory;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`consumed Memory : ${consumed}MB`);
});

// buffer 형식으로 파일읽기
const readStream = fs.createReadStream("./streamtxt.txt", {
  // 한번에 얼만큼의 데이터를 읽어올래? 1byte 가 1문자(영어)
  highWaterMark: 64, // 기본 64kbytes
  encoding: "utf-8",
});

// 데이터가 조금씩 읽히는걸 볼수있음
const data = [];

readStream.on("data", (chunk) => {
  console.log(chunk);
  data.push(chunk);
});

readStream.on("end", () => {
  console.log(data.join(""));
});

readStream.on("error", (error) => {
  console.log(error);
});
