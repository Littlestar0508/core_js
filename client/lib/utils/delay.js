import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(360deg)';

//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//   });
// });

const shouldRejected = false;

const p = new Promise((r, j) => {
  if (!shouldRejected) {
    r('성공');
  } else {
    j('실패');
  }
});

p.then((res) => {
  // console.log(res);
});

// promise 객체를 반환하는 함수

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }
  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((r, j) => {
    setTimeout(() => {
      if (!shouldRejected) {
        r(data);
      } else {
        j(errorMessage);
      }
    }, timeout);
  });
}

delayP(2000);

// delayP(false)
//   .then((res) => {
//     first.style.top = '-100px';

//     return delayP(false);
//   })
//   .then((res) => {
//     first.style.transform = 'rotate(360deg)';

//     return delayP(false);
//   })
//   .then((res) => {
//     first.style.top = '0px';
//   });
