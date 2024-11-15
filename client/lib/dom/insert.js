function insertLast(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforeend', text);
}

function insertBefore(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforebegin', text);
}

function insertAfter(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterend', text);
}

function insertFirst(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterbegin', text);
}
