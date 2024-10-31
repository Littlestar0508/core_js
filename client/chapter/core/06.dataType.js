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

//객체에 메서드를 정의하는 방법

// 1. normal function
// 2. arrow function
// 3. concise method
// 객체의 메서드를 정의할 때 => concise method 권장
// 메서드 안에서 함수를 정의해야 할 때 => arrow function 권장
// 이유는 this를 찾기 위해서

const user = {
  name : "tiger",
  age : 42,
  sayHi: function() {
    console.log('Hi');
  },

  sayHi2:()=> {
    console.log('hihi');
  },

  sayHi3() {
    // function sayBye() {
    //   console.log('bye');
    // }

    const sayBye = () => {
      console.log(this.age = 30);
    }

    sayBye();
  }
}


// Array

const arr = ['a',{name:'like'},(a,b)=>{a-b},4];

const newArray = new Array(5); // 크기가 5인 배열이 생성됨

// function

function sum (a,b /* parameter */) {
  return a+b;
}

const result = sum(2,3 /* arguments */);

console.log(result);

//쉬운 이해를 돕기 위한 코드
// function 붕어빵틀(재료) {
// return `따끈따끈한 ${재료} 붕어빵입니다`
// }

// const 팥붕 = 붕어빵틀('팥');
// const 슈붕 = 붕어빵틀('슈크림');
// const 피붕 = 붕어빵틀('피자');

// this
