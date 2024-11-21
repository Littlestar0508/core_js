const END_POINT = 'https://jsonplaceholder.typicode.com/users/10';

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

  if (!method === 'DELETE') {
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

xhr.get(
  END_POINT,
  (data) => {
    console.log(data);
  },
  () => {}
);

xhr.delete(
  END_POINT,
  (data) => console.log(data),
  () => {}
);
