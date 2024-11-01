/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 15;

switch (a) {
  case 10:
    console.log(a);
    break;
  case 13:
    console.log(a);
    break;
  case 15:
    console.log(a);
    break;
  case 20:
    console.log(a);
    break;
  default:
    console.log('10,13,15,20 중에 숫자가 없습니다.');
    break;
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
let thisTime = '저녁';

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case '아침':
    console.log('뉴스 기사 글을 읽는다');
    break;
  case '점심':
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case '저녁':
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case '밤':
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case '심야':
  case '새벽':
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === '아침') {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === '점심') {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === '저녁') {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === '밤') {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === '심야' || thisTime === '새벽') {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}
/* switch vs. if -------------------------------------------------------- */

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(value) {
  switch (value) {
    case 0:
      return '일요일';
    case 1:
      return '월요일';
    case 2:
      return '화요일';
    case 3:
      return '수요일';
    case 4:
      return '목요일';
    case 5:
      return '금요일';
    case 6:
      return '토요일';
  }
}

// getDay 함수를 가지고 주말인지 평일인지 판단하여 출력

function weekend() {
  const today = getDay(getRandom(7));

  // if(today.includes('일요일') || today.includes('토요일')) {
  //   return `오늘은 ${today}입니다. 그러므로 주말입니다.`;
  // }
  // else {
  //   return `오늘은 ${today}입니다. 그러므로 평일입니다.`;
  // }

  return today.includes('일요일') || today.includes('토요일')
    ? `오늘은 ${today}입니다. 그러므로 주말입니다.`
    : `오늘은 ${today}입니다. 그러므로 평일입니다.`;
}

const day = weekend();

console.log(day);
