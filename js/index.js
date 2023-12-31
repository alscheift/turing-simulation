import Turing from "./Turing.js";
import Addition from "./Operation/Addition.js";
import Division from "./Operation/Division.js";
import SquareRoot from "./Operation/SquareRoot.js";
import Exponent from "./Operation/Exponent.js";
import Multiplication from "./Operation/Multiplication.js";
import Factorial from "./Operation/Factorial.js";

/*
let T = null;
console.log("Turing Machine Exponent");
console.log("\nKasus 1 (2^3) = 8 harusnya 11111111");
T = new Turing(Exponent, 3, "BB110111BB");
T.runUntilFinish();
T.printAllTape();
import Division from "./Operation/Division.js";

console.log("\nKasus 2 (0^9) = 0 harusnya BBBB");
T = new Turing(Exponent, 3, "BB0111111111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 3 (12^0) = 1 harusnya 1");
T = new Turing(Exponent, 3, "BB1111111111110BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 4 (1^9) = 1 harusnya 1");
T = new Turing(Exponent, 3, "BB10111111111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 5 (4^2) = 16 harusnya 1111111111111111");
T = new Turing(Exponent, 3, "BB1111011BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 6 (0^5) = 0 harusnya ");
T = new Turing(Exponent, 3, "BB011111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 7 (0^0) = 1 harusnya 1");
T = new Turing(Exponent, 3, "BB0BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 8 (3^2) = 9 harusnya 111111111");
T = new Turing(Exponent, 3, "BB111011BB");
T.runUntilFinish();
T.printAllTape();
*/

/*
console.log("Turing Machine Addition");
console.log("\nKasus 1 (-2 + 1) = -1 harusnya 0");
const a = new Turing(Addition, 2, "BB00X1BB");
a.runUntilFinish();
a.printAllTape();

console.log("\nKasus 2 (5 + 4) = 9 harusnya 1111111111");
const b = new Turing(Addition, 2, "BB11111X1111BB");
b.runUntilFinish();
b.printAllTape();

console.log("\nKasus 3 (4 + -5) = -1 harusnya 0");
const c = new Turing(Addition, 2, "BB1111X00000BB");
c.runUntilFinish();
c.printAllTape();

console.log("\nKasus 4 (-2 + -3) = -5 harusnya 00000");
const d = new Turing(Addition, 2, "BB00X000BB");
d.runUntilFinish();
d.printAllTape();

console.log("\nKasus 5 (-4 + 10) = 6 harusnya 111111");
const e = new Turing(Addition, 2, "BB0000X1111111111BB");
e.runUntilFinish();
e.printAllTape();
*/

// console.log("\nTuring Machine Division");
// console.log("\nKasus 1 (5 / 2) = 2 harusnya 11");
// const f = new Turing(Division, 3, "BB11111X11BB");
// f.runUntilFinish();
// f.printAllTape();

// console.log("\nKasus 2 (9 / -3) = -3 harusnya 000");
// const g = new Turing(Division, 3, "BB111111111X000BB");
// g.runUntilFinish();
// g.printAllTape();

// console.log("\nKasus 3 (0 / 3) = 0 harusnya B");
// const h = new Turing(Division, 3, "BBX111BB");
// h.runUntilFinish();
// h.printAllTape();

// console.log("\nKasus 4 (0 / 0) = 0 harusnya U");
// const i = new Turing(Division, 3, "BBXBB");
// i.runUntilFinish();
// i.printAllTape();

// console.log("\nKasus 5 (-10 / 2) = -5 harusnya 00000");
// const j = new Turing(Division, 3, "BB0000000000X11BB");
// j.runUntilFinish();
// j.printAllTape();

// console.log("\nTuring Machine Square Root");
// console.log("\nKasus 1 (4) = 2 harusnya 11");
// const k = new Turing(SquareRoot, 4, "BB1111BB");
// k.runUntilFinish();
// k.printAllTape();

// console.log("\nKasus 2 (9) = 3 harusnya 111");
// const l = new Turing(SquareRoot, 4, "BB111111111BB");
// l.runUntilFinish();
// l.printAllTape();

// console.log("\nKasus 3 (20) = 4 harusnya 1111");
// const m = new Turing(SquareRoot, 4, "BB11111111111111111111BB");
// m.runUntilFinish();
// m.printAllTape();

// console.log("\nKasus 4 (45) = 6 harusnya 111111");
// const n = new Turing(SquareRoot, 4, "BB11111111111111111111111111111111111111111111BB");
// n.runUntilFinish();
// n.printAllTape();

// console.log("\nKasus 5 (10) = 3 harusnya 111");
// const o = new Turing(SquareRoot, 4, "BB1111111111BB");
// o.runUntilFinish();
// o.printAllTape();

// console.log("\nKasus 6 (68) = 8 harusnya 11111111");
// const p = new Turing(SquareRoot, 4, "BB11111111111111111111111111111111111111111111111111111111111111111111BB");
// p.runUntilFinish();
// p.printAllTape();

// console.log("Turing Machine Factorial");
// console.log("\nKasus 1 (1!) = 1 harusnya 0");
// const factorial = new Turing(Factorial, 3, "BB01BB");
// factorial.runUntilFinish();
// factorial.printAllTape();

// console.log("Turing Machine Factorial");
// console.log("\nKasus 2 (2!) = 2 harusnya 00");
// const factorial = new Turing(Factorial, 3, "BB001BB");
// factorial.runUntilFinish();
// factorial.printAllTape();

// console.log("Turing Machine Factorial");
// console.log("\nKasus 3 (3!) = 6 harusnya 000000");
// const factorial = new Turing(Factorial, 3, "BB0001BB");
// factorial.runUntilFinish();
// factorial.printAllTape();

// console.log("Turing Machine Factorial");
// console.log("\nKasus 4 (4!) = 24 harusnya 000000000000000000000000");
// const factorial = new Turing(Factorial, 3, "BB00001BB");
// factorial.runUntilFinish();
// factorial.printAllTape();

// console.log("Turing Machine Factorial");
// console.log("\nKasus 5 (5!) = 120 harusnya 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
// const factorial = new Turing(Factorial, 3, "BB000001BB");
// factorial.runUntilFinish();
// factorial.printAllTape();

/*
let T = null;
console.log("Turing Machine Binary Logarithm");

console.log("\nKasus 1 (log2(1)) = 0 harusnya BBBB");
T = new Turing(BinaryLogarithm, 3, "BB1BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 2 (log2(2))) = 1 harusnya BB1BB");
T = new Turing(BinaryLogarithm, 3, "BB11BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 3 (log2(3)) = 1 harusnya BB1BB");
T = new Turing(BinaryLogarithm, 3, "BB111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 4 (log2(4)) = 2 harusnya BB11BB");
T = new Turing(BinaryLogarithm, 3, "BB1111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 5 (log2(5)) = 2 harusnya BB11BB");
T = new Turing(BinaryLogarithm, 3, "BB11111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 6 (log2(8)) = 3 harusnya BB111BB");
T = new Turing(BinaryLogarithm, 3, "BB11111111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 7 (log2(15)) = 3 harusnya BB111BB");
T = new Turing(BinaryLogarithm, 3, "BB111111111111111BB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 8 (log2(130)) = 7 harusnya BB1111111BB");
T = new Turing(
    BinaryLogarithm,
    3,
    "BB111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111BB"
);
T.runUntilFinish();
T.printAllTape();
*/

console.log("Turing Machine Multiplication");
console.log("\nKasus 0 (0 * 0) = 0 harusnya BB");
let T = new Turing(Multiplication, 3, "BBXXBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 1 (0 * 9) = 0 harusnya BBBB");
T = new Turing(Multiplication, 3, "BBX111111111XBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 2 (0 * -3) = 0 harusnya BBBB");
T = new Turing(Multiplication, 3, "BBX000XBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 3 (12 * 0) = 0 harusnya 0");
T = new Turing(Multiplication, 3, "BB111111111111XXBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 4 (-5 * 0) = 0 harusnya 0");
T = new Turing(Multiplication, 3, "BB00000XXBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 5 (4 * 3) = 12 harusnya 111111111111");
T = new Turing(Multiplication, 3, "BB1111X111XBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 6 (4 * -3) = -12 harusnya 000000000000");
T = new Turing(Multiplication, 3, "BB1111X000XBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 7 (-3 * 5) = -9 harusnya 000000000000000");
T = new Turing(Multiplication, 3, "BB000X11111XBB");
T.runUntilFinish();
T.printAllTape();

console.log("\nKasus 8 (-3 * -3) = 9 harusnya 111111111");
T = new Turing(Multiplication, 3, "BB000X000XBB");
T.runUntilFinish();
T.printAllTape();