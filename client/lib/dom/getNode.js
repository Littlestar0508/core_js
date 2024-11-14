const getNode = (node, context = document) => {
  if (context.nodeType !== 9) {
    context = getNode(context);
  }

  return context.querySelector(node);
};

const getNodes = (node, context = document) => {
  if (context.nodeType !== 9) {
    context = getNodes(context);
  }

  return context.querySelectorAll(node);
};
