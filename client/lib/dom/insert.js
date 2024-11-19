export function insertLast(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforeend', text);
}

export function insertBefore(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforebegin', text);
}

export function insertAfter(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterend', text);
}

export function insertFirst(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterbegin', text);
}
