const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  => 성공 | 실패

function xhr({
  method = 'GET',
  url = '',
  success = null,
  failure = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.addEventListener('readystatechange', () => {
    const { status, response, readyState } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);
        success(data);
      } else {
        failure({ message: '알 수 없는 오류가 발생했습니다' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

const obj = {
  name: 'tiger',
  age: 38,
};

// xhr({
//   method: 'DELETE',
//   url: END_POINT,
//   success: (data) => {
//     console.log(data);
//   },
//   failure: (err) => {
//     err.mseeage;
//   },
// });

xhr.get = (url, success, failure) => {
  xhr({ url, success, failure });
};

xhr.post = (url, success, failure, body) => {
  xhr({ method: 'POST', url, success, failure, body });
};

xhr.put = (url, success, failure) => {
  xhr({ method: 'PUT', url, success, failure });
};

xhr.delete = (url, success, failure) => {
  xhr({ method: 'DELETE', url, success, failure });
};

// xhr.get(
//   END_POINT,
//   (data) => {
//     console.log(data);
//   },
//   () => {}
// );

// xhr.delete(
//   END_POINT,
//   (data) => console.log(data),
//   () => {}
// );

/* -------------------------------------------------------------------------- */
/*                                 promise로 변경                                */
/* -------------------------------------------------------------------------- */

//mixin

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options = {}) {
  let { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        //complete
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({
//   method: 'GET',
//   url: END_POINT,
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url, body) => xhrPromise({ url, body, method: 'POST' });
xhrPromise.put = (url, body) => xhrPromise({ url, body, method: 'PUT' });
xhrPromise.delete = (url) => xhrPromise({ url, method: 'DELETE' });

// xhrPromise.get(END_POINT).then((res) => console.log(res));
// xhrPromise
//   .get(END_POINT)
//   .then((res) => {
//     console.log(res);

//     res.forEach(({ website }) => {
//       const tag = `
//       <div>site : ${website}</div>
//     `;

//       document.body.insertAdjacentHTML('beforeend', tag);
//     });
//   })
//   .then(() => {})
//   .catch(() => {});

/* -------------------------------------------------------------------------- */
/*                                    async                                   */
/* -------------------------------------------------------------------------- */

// async function d() {
//   return 1;
// }

async function delayA() {
  const p = new Promise((res) => {
    setTimeout(() => {
      res('성공');
    }, 2000);
  });

  const result = await p;

  return result;
}

console.log(delayA());

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
