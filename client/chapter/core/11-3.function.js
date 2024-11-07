/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  console.log(rest);

  let total = 0;

  // for문 total 계산
  // for (let i = 0; i < rest.length; i++) {
  //   total += rest[i];
  // }

  // for...of문 total계산
  // for (const price of rest) {
  //   total += price;
  // }

  // forEach
  // rest.forEach((price) => {
  //   total += price;
  // });

  // reduce
  // total = rest.reduce((acc, cur) => {
  //   return acc + cur;
  // },0);

  // total = rest.reduce((acc, cur) => acc + cur,0);

  console.log(total);
  return total;
};

calcAllMoney(10000, 30000, 50000);

let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

_calcAllMoney(10000, 30000, 50000);

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (base, exp) => {
  let total = 1;
  //for문
  // for (let i = 0; i < exp; i++) {
  //   total *= base;
  // }
  // return total;

  // 배열 순환
  // const arr = Array(exp)
  //   .fill(null)
  //   .forEach(() => {
  //     total *= base;
  //   });
  // return total;

  let result = Array(exp)
    .fill(null)
    .reduce((acc) => acc * base, 1);
  return result;

  // 재귀
  // if (exp === 1) {
  //   return base;
  // }
  // return base * pow(base, --exp);
};

console.log(pow(4, 3));

// repeat(text: string, repeatCount: number): string;
let repeat = (str, num) => {
  // 반복문
  let result = '';

  // for (let i = 0; i < num; i++) {
  //   result += str;
  // }

  // return console.log(result);

  // 배열 순환
  //   Array(num)
  //     .fill(null)
  //     .forEach(() => (result += str));
  //   return console.log(result);

  let arr = Array(num)
    .fill(null)
    .reduce((acc) => acc + str, '');
  return console.log(arr);
};

repeat('배고파❌', 3);

// function Button(text, state) {
//   this.content = text;
//   this.state = state;
// }

// const _a = new Button('more', 'default');

// const user = {
//   name: 'a',
//   total: 0,
//   grades: [50, 70, 40],
//   totalGrades() {
//     // 화살표 함수
//     this.grades.forEach((g) => {
//       this.total += g;
//     });

//     // 화살표 함수 축약형
//     // this.grades.forEach(g => this.total += g)

//     // 화살표 함수 축약형 + reduce 값을 바로 내보내는
//     // this.total = this.grades.reduce((acc,cur) => acc + cur)
//     return this.total;
//   },
// };

// user.totalGrades();
