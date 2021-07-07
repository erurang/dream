// count가 정의되지않음!!
// console.log(count);
// console.log(getCount);

// import export 생기기전
// const counter = require("./module_counter");

//import export 적용후
import { increase, getCount } from "./import.js";

increase();
console.log(getCount());
