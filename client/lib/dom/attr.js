function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) {
    throw typeError('이봐 젊은 친구 node와 prop을 잘못 입력하진 않았는가..');
  }
  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!isString(prop)) {
    throw TypeError('setAttr 함수의 두 번째 인수는 문자타입이어야 합니다');
  }
  if (isUndefined(value) || value === '') {
    node.removeAttribute(prop);
    return;
  }

  if (prop.startsWith('data-')) {
    prop = prop.slice(5);

    node.dataset[prop] = value;

    return;
  }

  node.setAttribute(prop, value);
}

// function attr(node, prop, value) {
//   if (isUndefined(value)) {
//     getAttr(node, prop);
//     return;
//   }
//   setAttr(node, prop, value);
// }

const attr = (node, prop, value) =>
  isUndefined(value) ? getAttr(node, prop) : setAttr(node, prop, value);
