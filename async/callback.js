"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration

// 비동기는 언제 코드가 실행될지 예측할 수 없는 것을 말한다.
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// 콜백은 항상 비동기에서만 쓰일까? No
// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Aasynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printImmediately(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStroage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStroage.loginUser(
  id,
  password,
  // 재정의하는 것이므로 user에 id가 넣어지는 것.
  (user) => {
    userStroage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log("error");
      }
    );
  },
  (error) => {
    console.log("error");
  }
);
