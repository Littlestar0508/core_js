/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

//좋은 함수를 작성하는 여건
// 1. 하나의 기능만을 담당
// 2. 재사용성
// 3. 함수가 무슨 기능을 담당하는지 알 수 있도록 작명(가독성)
// 4. 인자를 과도하게 사용하지 않는다(최대 4~5개가 적당함)

// 함수 선언
function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice(
  price1,
  price2 = getRandomValue(),
  price3 = getRandomValue(),
  price4 = getRandomValue()
) {
  // if (price4 === undefined) price4 = 0;
  // if (!price4) price4 = 0;
  // price4 = price4 || 0;
  // price4 ||= 0;
  // price4 = price4 ?? 100;
  // price4 ??= 100;
  if (price1 === undefined) {
    throw new Error('적어도 하나의 인수를 입력해주세요');
  }

  return price1 + price2 + price3 + price4;
}

// 함수 호출
const total = calcPrice(4500);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16) {
  if (pxValue === undefined) {
    throw new Error('px값은 필수 조건입니다.');
  }

  if (typeof base === 'string') {
    throw new TypeError('rem함수의 두 번째 인수는 숫자 타입이어야 합니다.');
  }

  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue, 10);
  }

  return pxValue / base + 'rem';
}

console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');

// css(node: string, prop: string, value: number|strung) : string;

function setCss(node, prop, value) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof prop !== 'string') {
    throw new TypeError('prop의 type은 문자 타입이어야 합니다.');
  }
  if (!(prop in document.body.style)) {
    throw new Error('잘못된 css입니다.');
  }

  if (!value) {
    throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값입니다.');
  }

  node.style[prop] = value;
}

setCss('.first', 'border', '4px dotted blue ');

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
