function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) {
    throw typeError('이봐 젊은 친구 node와 prop을 잘못 입력하진 않았는가..');
  }
  return node.getAttribute(prop);
}
