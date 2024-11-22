import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// const first = getNode('.first');
// const second = getNode('.second');

// // delay(() => {
// //   first.style.top = '-100px';
// //   second.style.top = '100px';

// //   delay(() => {
// //     first.style.transform = 'rotate(360deg)';
// //     second.style.transform = 'rotate(360deg)';

// //     delay(() => {
// //       first.style.top = '0px';
// //       second.style.top = '0px';
// //     });
// //   });
// // });

// const shouldRejected = false;

// const p = new Promise((r, j) => {
//   if (!shouldRejected) {
//     r('성공');
//   } else {
//     j('실패');
//   }
// });

// p.then((res) => {
//   // console.log(res);
// });

// // promise 객체를 반환하는 함수

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

export function delayP(options) {
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

/* -------------------------------------------------------------------------- */
/*                                    async                                   */
/* -------------------------------------------------------------------------- */

// async의 예시
// function _라면끓이기(){

//   delayP({data:'물'})
//   .then((res)=>{
//     console.log( res );

//     return delayP({data:'스프'})
//   })
//   .then((res)=>{
//     console.log( res );

//     return delayP({data:'면'})
//   })
//   .then((res)=>{
//     console.log( res );

//     return delayP({data:'계란'})
//   })
//   .then((res)=>{
//     console.log( res );

//     return delayP({data:'그릇'})
//   })
//   .then((res)=>{
//     console.log( res );

//   })

// }

// async function 라면끓이기(){

//   const a = await delayP({data:'물'})
//   console.log( a );

//   const b = await delayP({data:'스프'})
//   console.log( b );

//   // const c = await delayP({data:'면'})
//   console.log( '면' );

//   // const d = await delayP({data:'계란'})
//   console.log( '계란' );

//   const e = await delayP({data:'그릇'})
//   console.log( e );

// }

// 라면끓이기()

async function getData() {
  const res = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/6');
  insertLast(
    document.body,
    `<img src="${res.sprites.other.showdown['front_default']}" alt="" />`
  );
}

// getData();
