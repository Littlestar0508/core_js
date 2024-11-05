/* --------------- */
/* For Of Loop     */
/* --------------- */

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

for (const value of languages) {
  console.log(value.id);
}

// for ~ of 문
// - 특정 조건에서 건너띄기(Java문자 포함시 continue)
for (const value of languages) {
  if (value.name.toLowerCase().includes('java') && value.name.length < 5) {
    continue;
  }
  console.table(value);
}
// - 특정 조건에서 중단하기

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// for (const value in randomUser) {
//   if (Object.hasOwn(randomUser, value)) {
//     const L1 = randomUser[value];

//     if (typeof L1 === 'object') {
//       for (const value in L1) {
//         if (Object.hasOwn(L1, value)) {
//           const L2 = L1[value];

//           if (typeof L2 === 'object') {
//             for (const value in L2) {
//               if (Object.hasOwn(L2, value)) {
//                 const L3 = L2[value];
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// 매우 비효율적인 행위이다
// 효율적으로 작성하고자 재귀함수를 사용한다

//for of로 순환하기
for (const keyValue of Object.entries(randomUser)) {
  const key = keyValue[0];
  const value = keyValue[1];

  // 구조분해 할당
  // for(const [key,value] of Object.entries(randomUser))
  if (typeof value === 'object') {
    for (const keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];

      if (typeof value === 'object') {
        for (const keyValue of Object.entries(value)) {
          const key = keyValue[0];
          const value = keyValue[1];
        }
      }
    }
  }
}

// 재귀함수

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
};

// for (const key of arrayLike) {
//   console.log(key);
// } 에러가 난다 -> iterable하지 않기 때문

const message = '안녕 자바스크립트';
for (const key of message) {
  console.log(key);
}

const obj = {
  nickName: 'tiger',
  age: 40,
};

const keys = Object.keys(obj);
console.log(keys);

const values = Object.values(obj);
console.log(values);

const entries = Object.entries(obj);

for (const keyValue of entries) {
  const key = keyValue[0];
  const value = keyValue[1];

  console.log(key + ' ' + value);
}
