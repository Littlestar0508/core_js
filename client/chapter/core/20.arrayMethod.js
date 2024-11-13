/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 1,
    name: '이성우',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 2,
    name: '윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 3,
    name: '김미리',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
];
/* 요소 순환 ---------------------------- */

// forEach
function user(user) {
  console.log(user.name);
}

people.forEach(user);

// people.forEach((user) => {
//   console.log(user.job);
// });

const span = document.querySelectorAll('span');

span.forEach((e, index) => {
  e.addEventListener('click', function () {
    console.log('click');
    this.style.color = 'red';
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverse = people.toReversed();
// splice
const splice = [...people].splice(1, 2);
// sort

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const sort = people.sort(compare);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const map = people.map((user) => user.job);

//people의 나이에서 전부 +2살해서 새로운 배열에 저장하기
const age = people.map((user) => (user.age += 2));

const cardTag = people.map((user) => {
  const template = /* html */ `
  <li class="userCard">
    <div>
      <img src="${user.imgSrc}" alt="${user.imgAlt}" />
    </div>
    <ul>
      <li> <span class="strong">이름</span> : ${user.name}</li>
      <li> <span class="strong">나이</span> : ${user.age}</li>
      <li> <span class="strong">직업</span> : ${user.job}</li>
    </ul>
  </li>
`;
  return template;
});

const ul = document.querySelector('ul');
cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const mj = people.find((user) => {
  return user.name === 'MJ';
});

const az = people.find((user) => {
  return user.age > 30;
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
const mz = people.filter((user) => user.age < 40);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

const sumAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

const template = people.reduce((acc, cur) => {
  return (
    acc + `<li class="userCard">${cur.name} , ${cur.age} , ${cur.job}</li>`
  );
}, '');

ul.insertAdjacentHTML('beforeend', template);

/* string ←→ array 변환 ------------------ */
const arr = 'happy sad good luck';

const stringToArray = arr.split(' ');
const arrayToString = stringToArray.join(' ');
// split
// join

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

// forEach , filter , reduce , map의 동작 원리
const _forEach = (f, i) => {
  for (const a of i) {
    f(a);
  }
};

const _map = (f, i) => {
  const arr = [];

  for (const a of i) {
    arr.push(f(a));
  }

  return arr;
};

const _filter = (f, i) => {
  const arr = [];

  for (const a of i) {
    if (f(a)) {
      arr.push(a);
    }
  }

  return arr;
};

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc;
    acc = i.shift();
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

_forEach((item) => {
  console.log(item);
}, products);

const newMap = _map((item) => item.price, products);

const product = _filter((item) => {
  return item.price < 15000;
}, products);

const reducer = _reduce(
  (accItem, curItem) => accItem + curItem.price,
  0,
  products
);

const add = (a, b) => a + b;
console.log(
  _reduce(
    add,
    _map(
      (p) => p.price,
      _filter((p) => p.price < 20000, products)
    )
  )
);
