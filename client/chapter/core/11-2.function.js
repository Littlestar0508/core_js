/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  //함수 안에서만 접근 가능한 인수들의 집합 객체가 존재 : arguments
  let sum = 0;

  // for문 순환
  // for (let i = 0; i < arguments.length; i++) {
  //   sum += arguments[i];
  // }

  //for...of문
  // for (const value of arguments) {
  //   sum += value;
  // }

  // array method
  const arr = [...arguments]; //spread syntax
  // const arr = Array.from(arguments); //배열의 static method
  // const arr = Array.prototype.slice.call(arguments); // 배열의 instance method

  // forEach
  // arr.forEach(function (price) {
  //   sum += price;
  // });

  // reduce
  // sum = arr.reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);

  //arrow function으로 사용하기
  // sum = arr.reduce((acc, cur) => {
  //   return acc + cur;
  // });
  // 0은 initial value

  // arguments 배열 변환 없이 사용하는 법
  // Array.prototype.forEach.call(arguments, function (price) {
  //   sum += price;
  // });

  arguments.__proto__ = Array.prototype;

  return sum;
};

// const obj = {
//   total: null,
//   item: [1000, 2000, 3000, 4000],
//   totalPrice() {
//     this.item.forEach((price) => {
//       this.total += price;
//     });
//   },
// };

// obj.totalPrice();

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);

// forEach => 배열을 순환 => 값을 반환하지 않음
// reduce => 배열을 순환 => 값을 반환 : 문자,숫자,불린,배열,객체 등등등
// map => 배열을 순환 => 값을 반환 : 새로운 배열

const friends = ['a', 'b', 'c', 'd'];
// alphabet을 배열 내의 모든 elements에게 prefix로 주고 싶다
const f = friends.map(function (value, index) {
  return `<li>이름 : ${value}</li>`;
});

// f.forEach(function (tag) {
//   document.body.insertAdjacentHTML('beforeend', tag);
// });

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
// 보통 라이브러리에 많이 쓰임
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (condition, success, failure) {
  if (condition) {
    success();
  } else {
    failure();
  }
};

cb(
  true,
  function () {
    console.log('성공입니다.');
  },
  function () {
    console.log('실패입니다.');
  }
);

function movePage(url, success, failure) {
  if (url.includes('https')) {
    success(url);
  } else {
    failure();
  }
}

movePage(
  'https://www.naver.com',
  (url) => {
    console.log(
      `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다`
    );
  },
  () => {
    console.log('잘못된 경로를 입력하셨습니다');
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

//비동기에 대한 접근
// function getGeolocation(success,fail){

//   navigator.geolocation.getCurrentPosition((so)=>{
//     success(so.coords.latitude)
//   })
// }

// getGeolocation(
//   (data)=>{
//     console.log(data);
//   },
//   ()=>{

//   }
// )
