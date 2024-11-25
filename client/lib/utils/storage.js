import { isString } from './type.js';

const { localStorage: storage } = window;

export function setStorage(key, value) {
  return new Promise((res, rej) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      res();
    }
    rej({ message: 'setStorage함수의 첫 번째 인수는 문자 타입 이어야 합니다' });
  });
}

export function getStorage(key) {
  return new Promise((res, rej) => {
    if (isString(key)) {
      res(JSON.parse(storage.getItem(key)));
    }

    rej({ message: 'key의 값은 문자 타입이어야 합니다.' });
  });
}

export function deleteStorage(key) {
  return new Promise((res) => {
    !key ? storage.clear() : storage.removeItem(key);
    res();
  });
}

// setStorage('user', { name: 'tiger', age: 40 }).then(() => {
//   console.log('저장 완료');
// });

// getStorage('user').then((res) => {
//   console.log(res.name);
// });

// deleteStorage('user');
// deleteStorage();

export function setCookieValue(name, value, days, path = '/') {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=${path}`;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // days를 밀리세컨즈
    cookieString += `; expires=${date.toUTCString()}`;
  }

  document.cookie = cookieString;
}

export function getCookieValue(name) {
  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${encodeURIComponent(name)}=`);

  console.log(parts);

  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(';').shift());
  }
  return null;
}

// setCookieValue('username', 'tiger', 1);
// getCookieValue('username');
