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

const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);
