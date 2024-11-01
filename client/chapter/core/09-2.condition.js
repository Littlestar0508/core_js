/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// Logical OR assignment
// a = a || b;
// a ||= b;
//위 두 줄은 같다

// Logical AND assignment
// a = a && b;
// a &&= b;

// 부정 연산자
let reverseValue = value;
console.log(!reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

// 조건문으로 표현

// let admin = prompt('누구십니까', '');

// if (admin?.toLowerCase() === 'admin') {
//   let pwd = prompt('비밀번호를 입력해주세요', '');

//   if (pwd?.toLowerCase() === 'themaster') {
//     alert('환영합니다!');
//   } else if (pwd === '' || pwd === null || pwd.replaceAll(' ','') === '') {
//     alert('취소되었습니다');
//   } else {
//     alert('인증을 실패하였습니다.');
//   }
// } else if (admin === '' || admin === null || admin.replaceAll(' ','') === '') {
//   alert('취소되었습니다');
// } else {
//   alert('아이디를 확인해주세요');
// }

// 함수로 표현

function login() {
  let userName = prompt('누구십니까?');

  // if(userName === null || userName === undefined) return
  // if(!userName) return

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해주세요');

    if (password.toUpperCase() === 'MASTER') {
      console.log('로그인 성공');
    } else if (password === null) {
      console.log('취소됐습니다.');
    } else {
      console.log('잘못된 정보를 입력하셨습니다.');
      login();
    }
  } else if (userName === null || userName.replaceAll(' ', '') === '') {
    // replaceAll 은 replace(\/s*/g , '') 로 바꿔도 된다
    console.log('취소됐습니다.');
  } else {
    console.log('제대로된 값을 입력해주세요');
  }
}

// login();
