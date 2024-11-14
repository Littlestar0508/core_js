const getNode = (node, context = document) => {
  if (context.nodeType !== 9) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
};

const getNodes = (node, context = document) => {
  if (context.nodeType !== 9) {
    context = document.querySelector(context);
  }

  return context.querySelectorAll(node);
};
