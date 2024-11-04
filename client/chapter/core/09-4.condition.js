/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log(0 || WIDTH);
console.log(0 ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined || WIDTH);

console.log(isActive || WIDTH);
console.log(isActive ?? WIDTH);

console.log('' || WIDTH);
console.log('' ?? WIDTH);

// a ||= b a가 false일때 b의 값을 a에 할당하는 형태
// a &&= b a가 true일때 b의 값을 a에 할당
// a ??= b a가 undefined or null 일때 b의 값을 a에 할당

// 1. 사용자(user) 상태 -> 회원/비회원 으로 구분
// 회원 -> 일반 / 프리미엄

// 2. 할인 규칙
// 모든 사용자(회원, 비회원) 첫 구매시 5% 할인이 적용
// 일반 회원은 두 번째 구매부터 10% 할인
// 프리미엄 회원은 항상 20% 할인
// 비회원은 두 번째 구매부터 할인을 받을 수 없습니다

// 3. 추가 조건
// 구매 금액이 2만원 이상일 경우 추가로 5% 할인이 부여됩니다.

function discountPrice(userState, count, price) {
  let percentage = 0;

  // switch (userState) {
  //   case '비회원':
  //     if (count > 1) {
  //       return price;
  //     } else {
  //       percentage += 0.05;
  //     }
  //     break;

  //   case '일반 회원':
  //     if (count > 1) {
  //       percentage += 0.1;
  //     } else {
  //       percentage += 0.05;
  //     }
  //     break;

  //   case '프리미엄 회원':
  //     if (count > 1) {
  //       percentage += 0.2;
  //     } else {
  //       percentage += 0.25;
  //     }
  //     break;
  // }

  // if (price >= 20000) {
  //   percentage += 0.05;
  // }

  // price *= 1 - percentage;
  // return price;

  if (count === 1) {
    percentage += 0.05;
  }

  if (userState === '프리미엄 회원') {
    percentage += 0.2;
  } else if (userState === '일반 회원' && count > 1) {
    percentage += 0.1;
  } else if (userState === '비회원' && count > 1) {
    percentage += 0;
  }

  if (price >= 20000) {
    percentage += 0.05;
  }

  return (price *= 1 - percentage);
}

console.log(discountPrice('비회원', 2, 23500));
