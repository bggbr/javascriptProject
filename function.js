// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body .. return; }
// one function === one thing 하나의 함수는 한 가지 일만 하도록 작성!
// naming: doSomething, command, verb 형태로 지정하는 것이 좋다.
// e.g. createCardAandPoint -> createCard, createPoint 세분화 시키자.
// function is object in JS

function printHello() {
  console.log("Hello");
}

let a = printHello;
a();

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference 객체의 경우 레퍼런스가 전달.
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "bob");

// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// this is scope

// 6. Return a value

// 7. Early return, early exit
// bad situation
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good situation
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// ======================
// 1. Function expression

// 2. Callback function using function expression
// 상황에 맞으면 전달하는 함수를 콜백 함수라 한다.
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("Yes!!");
};
const printNo = function () {
  console.log("No!!!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};
// const simplePrint = () => console.log("simplePrint!");
const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};
console.log(simpleMultiply(5, 1));

// practice
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);

//IIFE: Immediately Invoked Function Expression
(function Hello() {
  console.log("IIFE");
})();
