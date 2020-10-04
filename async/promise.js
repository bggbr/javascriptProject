"use strict";

// Promise는 자바스크립트 내에 내장 돼 있다.
// Promise is a JavaScript object for asynchronous operation.
// 딱 두 가지만 포인트를 잡고 공부!
// 1. State - 기능 수행 중인지(pending) -> 성공 했는지(fulfilled), 실패 했는지
// 2. 정보를 제공하는 Producer와 소비하는 Consumer
// State: 수행 중일 때는 Pending 상태 -> 완료 시, fulfilled 실패 시, rejected
// Producer or Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically.
// Promise는 executor라는 콜백 함수 안에 또 다른 두 가지 콜백 함수가 존재한다.
// (1) 기능을 정상 적으로 수행해서, 최종 데이터를 전달하는 resolve
// (2) 기능을 수행 하다가 문제가 생기면 전달하는 reject
const promisee = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) => 다 비동기적 처리가 좋다.
  console.log("doing something...");
  // promise를 실행하는 순간, 우리가 만든 execute라는 콜백 함수가 바로 실행되는 것을 알 수 있다.
  // 만약 저 안에 network 통신 함수를 넣으면 promise를 만드는 순간 network 통신이 수행된다.
  // 따라서 설계를 잘 해야 한다. 왜냐하면 promise는 execute를 바로 실행하기 때문이다.
  // 예를 들어, 버튼을 눌렀을 때 네트워크 통신이 수행되게 하기 위해서는 promise 안에 넣으면 안 되겠지?
  // 사용자가 요구하지도 않았는데 불필요한 네트워크 통신이 일어날 것이다.
});

const promise = new Promise((resolve, reject) => {
  console.log("doing something....");
  setTimeout(() => {
    resolve("ellie"); // 성공적으로 수행 시
    reject(new Error("no network")); // 실패할 시
  }, 2000);
});

// 2. Consumers: then, catch, finally
// then은 성공적인 케이스!
// catch 실패시
// finally는 성공 및 실패 여부 상관 없이 무조건 호출됨.
promise
  .then((value) => {
    // value는 콜백함수가 정상적으로 동작이 될 때, resolve라는 콜백함수가 동작이 된다.
    // 따라서 resolve의 변수들이 전달되겠지?
    // value is ellie가 되겠지?
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise Chaining.
// 프로미스 체이닝 연습
// 프로미스 체이닝은 프로미스 자체를 리턴 시키는 것.
// 1초 정도 있다가 숫자 1를 전달하는 Promise 연습
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2) // 1이 전달
  .then((num) => num * 3) // 2가 전달
  .then((num) => {
    // 6이 전달
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => {
    // 5가 전달
    console.log(num);
  });

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 계란`), 1000);
  });

const cook = (egg) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} = 요리`), 1000);
  });
};

getHen() //
  .then((dak) => getEgg(dak))
  .then((al) => cook(al))
  .then((meal) => console.log(meal)) // 최종적으로 만들어진 문자열
  .catch(console.log);

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
