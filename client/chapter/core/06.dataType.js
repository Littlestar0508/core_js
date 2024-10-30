/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;
console.log(typeof empty); //object반환
console.log(empty);

// 2. 값이 할당되지 않은 상태
let ud;
console.log(typeof ud);
console.log(ud);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const str1 = "멋쟁이";
const str2 = '사자';
const str3 = `${str2}처럼`;
console.log(typeof str1 , typeof str2 , typeof str3);
console.log(str1 , str2 , str3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const num = 3.14;
console.log(typeof num);
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const Bnum = 113154n;
console.log(typeof Bnum);
console.log(Bnum);

// 6. 참(true, yes) 또는 거짓(false, no)
const isTrue = true;
if (isTrue) {
  console.log(typeof isTrue);
  console.log(isTrue);
}

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const list = ['강아지', '고양이', '사막여우', '라쿤'];
console.log(typeof list);
console.log(list);

// 8. 고유한 식별자(unique identifier)
const sym = Symbol('main');
console.log(typeof sym);
console.log(sym);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

// Array

// function

// this
