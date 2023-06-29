import Turing from "./Turing.js";
import Addition from "./Operation/Addition.js";
import Division from "./Operation/Division.js";

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

console.log("\nTuring Machine Division");
console.log("\nKasus 1 (5 / 2) = 2 harusnya 11");
const f = new Turing(Division, 3, "BB11111X11BB");
f.runUntilFinish();
f.printAllTape();

console.log("\nKasus 2 (9 / -3) = -3 harusnya 000");
const g = new Turing(Division, 3, "BB111111111X000BB");
g.runUntilFinish();
g.printAllTape();

console.log("\nKasus 3 (0 / 3) = 0 harusnya B");
const h = new Turing(Division, 3, "BBX111BB");
h.runUntilFinish();
h.printAllTape();

console.log("\nKasus 4 (0 / 0) = 0 harusnya U");
const i = new Turing(Division, 3, "BBXBB");
i.runUntilFinish();
i.printAllTape();

console.log("\nKasus 5 (-10 / 2) = -5 harusnya 00000");
const j = new Turing(Division, 3, "BB0000000000X11BB");
j.runUntilFinish();
j.printAllTape();