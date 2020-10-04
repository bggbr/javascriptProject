"use strict";

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStroage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStroage
  .loginUser(id, password)
  .then(userStroage.getRoles)
  .then((user) => alert(`${user.name} is ${user.role}`))
  .catch(console.log);
