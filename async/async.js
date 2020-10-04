"use strict";

// async & await
// clear style of using promise ;)
// async 또는 promise 둘다 사용하니까 확실히 알아둘 것!

// 1. async
function fetchUser() {
  // do network request in 10 secs... (가정)
  return "ellie";
}

const user = fetchUser();
console.log(user);
// 이렇게 하면 자바스크립트는 동기적으로 처리하기 때문에
// 사용자는 빈 브라이저에서 10초를 기다려야 한다.
// 따라서 우리는 Promise를 이용했다.
function fetchUser() {
  return new Promise((resolve, reject) => {
    return "ellie";
  });
}

// 이렇게 하면 Promise는 pending 상태가 된다.
// 따라서 우리는 resolve와 reject를 이용해야한다.
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve("ellie");
  });
}

// 1. async
// 함수 앞에 async라는 키워드를 쓰면 코드 블럭이 자동으로 promise로 바뀐다.
async function fetchUser() {
  return "ellie";
}

// 2. await
// await라는 키워드는 async 키워드가 붙은 함수 안에서만 쓸 수 있다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "사과";
}

async function getBanana() {
  await delay(1000);
  return "바나나";
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);

// promise를 남발하면 콜백지옥이 발생한다.
// 따라서 async를 이용한다.
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

// 바나나와 애플을 받아 오는데 연관이 없기 때문에 기다리는 것은 비효율 적이다.
// 이렇게 하면 병렬적으로 실행이 된다.
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 배열에서 가장 먼저 리턴하는 애만 출력하는 예제
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
