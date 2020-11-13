// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);

// 3. Increment and decrement operators
let counters = 2;
const preIncrement = ++counters;

// 6. Logical operators

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === string equality, no type conversion 타입까지 고려한다는 말.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operators: if
// if, else if, else

// 9. Ternary oeprator: ?
// condition ? value1 : value2;

//
