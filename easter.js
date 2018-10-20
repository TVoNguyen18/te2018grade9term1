// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// Write your program below!
// First line should get user input (year) and store it in variable y.

let y = READLINE.question("Input a year after 1582: ");
let a = Math.floor(y % 19);
let b = Math.floor(y / 100);
let c = Math.floor(y % 100);
let d = Math.floor(b / 4);
let e = Math.floor(b % 4);
let f = Math.floor((b + 8) / 25);
let g = Math.floor((b - f + 1) / 3);
let h = Math.floor((19 * a + b - d - g + 15) % 30);
let i = Math.floor(c / 4);
let k = Math.floor(c % 4);
let r = Math.floor((32 + 2 * e + 2 * i - h - k) % 7);
let m = Math.floor((a + 11 * h + 22 * r) / 451);
let n = Math.floor((h + r - 7 * m + 114) / 31);
let p = Math.floor((h + r - 7 * m + 114) % 31);

console.log(
`y = ${y}
a = ${a}
b = ${b}
c = ${c}
d = ${d}
e = ${e}
f = ${f}
g = ${g}
h = ${h}
i = ${i}
k = ${k}
r = ${r}
m = ${m}
n = ${n}
p = ${p}`);
console.log("In " + y + ", Easter fell on " + n + "/" + (p + 1));
