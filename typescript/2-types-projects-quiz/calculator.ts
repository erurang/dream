/**
 * Let's make a calculator 🧮
 */

type Calculate = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(s: Calculate, n1: number, n2: number): number {
  if (s === "add") return n1 + n2;
  if (s === "substract") return n1 - n2;
  if (s === "multiply") return n1 * n2;
  if (s === "divide") return n1 / n2;
  if (s === "remainder") return n1 % n2;
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
