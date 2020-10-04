"use strict";

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "bob" && password === "bob") {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 1000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "bob") {
        onSuccess({ name: "bob", roles: "admin" });
      } else {
        onError(new error("not found"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`hello ${userWithRole.name}, you are a ${userWithRole.roles}`);
      },
      (error) => {
        alert(`not found`);
        console.log("not found");
      }
    );
  },
  (error) => {
    alert("not found");
  }
);
