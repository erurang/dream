/// npm init ( package.json 생성) module = type
// import export 최신문법 적용

let count = 0;

export function increase() {
  count++;
}

export function getCount() {
  return count;
}
