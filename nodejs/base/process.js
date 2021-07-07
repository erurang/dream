import process from "process";

// process.openStdin(); // sockect open
// call stack
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("settime");
}, 0);

// callstack 다비운다음에 실행해
process.nextTick(() => console.log("ddd"));

for (let i = 0; i < 10; i++) {
  console.log(i);
}
