// 1. Use strict
// javascript is very flexible
// flexible === dangerous
// added ECMAScript 5
"use strict";

// 2. Variable
// let (added in ES6)
// var (don't ever use this!!)
// var hositing (move declaration from bottom to top)
// var has no block scope

// 3. Constants
// favor immutable data type always
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// Immutable vs Mutable
// primitive, single item: number, string, boolean, null, symbol
// object, box container
// function
// primitive는 값 자체가 메모리에 저장된다.
// objects는 값 자체가 커서 레퍼런스로 저장된다.
// const ellie로 객체를 저장하게 되면, ellie는 수정이 불가하지만, ellie에
// 속한 변수들은 변경이 가능하다.

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
text = `7` + 6;
console.log(`value: ${text}, type:${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type:${typeof text}`);

// object,
const bob = { age: 30, major: "telecommunication" };
console.log(bob);
bob.age = 31;
console.log(bob);
