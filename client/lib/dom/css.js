/* global syntaxError */

function getCss(node, prop) {
  if (isString(node)) {
    node = getNode(node);
  }

  if (isUndefined(prop)) {
    return getComputedStyle(node);
  }

  if (!(prop in document.body.style)) {
    throw syntaxError('해당 property는 올바르지 않은 값입니다');
  }

  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (isString(node)) {
    node = getNode(node);
  }
  // 의미가 없을 수 있는 코드들이다
  if (isUndefined(value)) {
    return (node.style[prop] = '');
  }
  if (isUndefined(prop)) {
    throw syntaxError('prop의 값을 필수 입력사항입니다');
  }
  // 여기까지
  node.style[prop] = value;
}

export const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

/* -------------------------------------------------------------------------- */
/*                                  css class                                 */
/* -------------------------------------------------------------------------- */

// JSDoc

/**
 * @function addClass DOM Element에 클래스를 추가하는 함수
 * @param {HTMLElemnt | string} node
 * @param  {string | array | object} className
 * @return {void}
 */

export function addClass(node, ...className) {
  // if (isString(node)) {
  //   node = getNode(node);
  // }

  // let arr = [];
  // if (isString(className) && className.includes(',')) {
  //   arr = className.split(',');
  // }
  // if (isClassNameect(className)) {
  //   for (const keys in className) {
  //     arr.push(className[keys]);
  //   }
  // }
  // if (isArray(className)) {
  //   arr = [...className];
  // }

  // if (arr.length > 0) {
  //   for (let i = 0; i < arr.length; i++) {
  //     node.classList.add(arr[i]);
  //   }
  //   return;
  // }
  // if (className.includes(',')) {
  //   className = className.replace(/\s*/g, '').split(',');

  //   className.forEach((c) => node.classList.add(c));
  // }

  className.forEach((c) => {
    if (isObject(c)) {
      c = Object.values(c);
    }

    if (c.includes(',')) {
      c = c.replace(/\s*/g, '').split(',');
    }
    if (isArray(c)) {
      c.forEach((c) => {
        node.classList.add(c);
      });
    } else {
      node.classList.add(c);
    }
  });
}

export function revmoeClass(node, className) {
  if (isString(node)) {
    node = getNode(node);
  }
  if (!className) {
    node.className = '';
  }
  node.classList.remove(className);
}

export function toggleClass(node, className) {
  if (isString(node)) {
    node = getNode(node);
  }
  return node.classList.toggle(className);
}
