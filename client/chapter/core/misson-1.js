const obj = {
  name: 'tiger',
  age: 40,
};

function getValueAtObject(object, key) {
  if (
    Object.prototype.toString.call(object).slice(8, -1).toLowerCase() !==
    'object'
  ) {
    throw new TypeError(
      'getValueAtObect 함수의 첫 번째 인수는 객체 타입이어야 합니다.'
    );
  }

  if (typeof key !== 'string') {
    throw new TypeError(
      'getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!(key in object)) {
    throw new SyntaxError('해당 객체에는 key값이 존재하지 않습니다.');
  }

  return object[key];
}

console.log(getValueAtObject(obj, 'name')); // 'tiger'

function _getValueAtObject(object, key) {
  const entries = Object.entries(object);
  let value;
  // for (let [k, v] of entries) {

  //   if (k === key) {
  //     return v;
  //   }
  // }

  entries.forEach(([k, v]) => {
    if (k === key) value = v;
  });

  return value;
}

console.log(_getValueAtObject(obj, 'name'));

const arr = ['a', 'b', 'c'];

function getNumberAtArray(array, index) {
  if (!Array.isArray(array)) {
    throw new Error(
      `전달된 첫 번째 인수의 데이터 타입은 ${typeof array}입니다. 해당 함수의 첫 번째 인수는 배열 타입이어야 합니다.`
    );
  }
  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    throw new Error('Error!');
  }
}

console.log(getNumberAtArray(arr, 1));
