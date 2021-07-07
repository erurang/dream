// import path from "path";
const { parse } = require("path");
const path = require("path");

// const __dirname = path.resolve();
// const __filename = path.resolve();

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
console.group(path.extname(__filename));

console.log(path.sep);
console.log(path.delimiter);

const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);
