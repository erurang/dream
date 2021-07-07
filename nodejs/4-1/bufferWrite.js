import fs from "fs";
import zlip from "zlib";

const writeStream = fs.createWriteStream("./file3.txt");

writeStream.on("finish", () => {
  console.log("finished!");
});

writeStream.write("Hello~~");
writeStream.write("World~~");

// end 이벤트가 있어야 on에서 finish가 처리됨
writeStream.end();

const readStream = fs.createReadStream("./file2.txt");

// 읽어온 데이터를 연결함 // => 스트림으로 갈라진 데이터를 파이프를 연결하듯이 붙이는거임

const zlibStream = zlip.createGzip();
const piping = readStream.pipe(zlibStream).pipe(writeStream);

piping.on("finish", () => {
  console.log("done~");
});
