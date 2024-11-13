/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

// 부분 문자열 추출
let slice = message.slice();
let subString = message.substring(5, -1);
// let subStr;

// 문자열 포함 여부 확인
let indexOf = message.indexOf('s');

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;

    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;

    case agent.indexOf('safari') > -1:
      browserName = 'Apple Safari';
      break;

    case agent.indexOf('firefox') > -1:
      browserName = 'FireFox';
      break;

    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;

    default:
      browserName = '이게 무슨....브라우저....';
  }

  return browserName;
}

let lastIndexOf = message.lastIndexOf('s');
let includes = message.includes('Less');
let startsWith = message.startsWith('Less');
let endsWith = message.endsWith('ore.');

// 공백 잘라내기
let str =
  '                           a                          b   c                                               d                      ';

let trimLeft = str.trimLeft();
let trimRight = str.trimRight();
let trim = str.trim();
let replaceAll = str.replaceAll(/\s*/g, '');

// 텍스트 반복
let repeat = message.repeat(30);

// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
let toUpperCase = message.toLocaleUpperCase();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
