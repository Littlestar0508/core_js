/* ---------------- */
/* Condition        */
/* ---------------- */

// const answer = prompt("자바스크립트의 '공식' 이름은 무엇일까요?", '');

// if (answer === 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// const answer = prompt('숫자를 입력해주세요', '');

// if (answer > 0) {
//   alert(1);
// } else if (answer < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result = (a+b<4) ? '미만' : '이상';

// let login = 'ㅁㅇㄹ';
// let message =
//   login == '직원'
//     ? '안녕하세요'
//     : login == '임원'
//       ? '환영합니다'
//       : login == ''
//         ? '로그인이 필요합니다.'
//         : '';

// console.log(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;

function watchingMovie() {
  let didWatchMovie = confirm('영화 봤니?');
  let goingToWatchMovie;

  if (didWatchMovie) {
    alert('또 봐');
  } else {
    goingToWatchMovie = confirm('영화 볼거니?');
    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 보러 가는데', '');

      alert(withWho);

      if (withWho === 'you') {
        alert('결혼');
      } else {
        alert('사망');
      }
    } else {
      alert('그냥 봐');
    }
  }
}

//삼항식으로 표현해보기
didWatchMovie = 'no';
goingToWatchMovie = 'yes';

let answer = didWatchMovie.includes('yes')
  ? '또 봐'
  : goingToWatchMovie.includes('yes')
    ? '지금 가자'
    : '그냥 봐';

alert(answer);

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
