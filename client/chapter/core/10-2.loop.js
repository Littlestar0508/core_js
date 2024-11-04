/* -------------------- */
/* Do While Loop        */
/* -------------------- */
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

// let count = +prompt('순환 횟수를 입력해주세요', 0);

// do {
//   if (count < 0) {
//     console.log(
//       '최초 실행된 메세지 입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//     );
//     break;
//   }
//   console.log(count);
//   count--;
// } while (count >= 0);

// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let iter = +prompt('몇 번 반복할까요?', 0);

// let num = 0;
// do {
//   console.log(num++);
// } while (iter--);

// html에 태그를 만들고 내가 원하는 태그에 style을 입히기 위해서(CSS)
// html에 태그를 만들고 내가 원하는 태그에 동적 제어를 주기 위해서(DOM)

// DOM(Document Object Model)

let first = document.querySelector('.first');

// console.log(first.nextElementSibling);

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== 1);
//first.nodeType === document.ELEMENT_NODE로도 사용이 가능
function next(node) {
  // validation
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

console.log(next('.first'));
console.log(next(first));

function prev(node) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

console.log(prev('.second'));
