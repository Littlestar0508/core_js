import { isString } from './type.js';

// console.log('star');

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// const response = await fetch(END_POINT);

// console.log(response);

// console.log(await response.json());

// const _response = await (await fetch(END_POINT)).json();
// console.log(_response);

// fetch POST 통신

// const responseP = await fetch(END_POINT, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'star',
//     age: 27,
//   }),
// });

// const data = await responseP.json();
// console.log(data);

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  headers: {
    'Conetent-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const star = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// const _response = await star({ url: END_POINT });
// console.log(_response.data);

star.get = (url, options = {}) => {
  return star({
    url,
    ...options,
  });
};

star.post = (url, body, options = {}) => {
  return star({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};
star.put = (url, body, options = {}) => {
  return star({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

star.patch = (url, body, options = {}) => {
  return star({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

star.delete = (url, options = {}) => {
  return star({
    method: 'DELETE',
    url,
    ...options,
  });
};

// const res1 = await star.get(END_POINT);
// console.log(res1.data);

// const res2 = await star.post(END_POINT, { name: 'star', age: 27 });
// console.log(res2.data);
