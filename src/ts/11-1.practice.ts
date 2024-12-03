function getCss<K extends keyof CSSStyleDeclaration>(
  node: Element | string,
  prop: K
): CSSStyleDeclaration[K] {
  if (typeof node === "string") {
    const element = document.querySelector(node);
    if (!element) throw new Error(`${node}에 해당하는 요소를 찾을 수 없습니다.`);
    node = element;
  }

  return getComputedStyle(node)[prop];
}

function setCss<K extends keyof CSSStyleDeclaration>(
  node: Element | string,
  prop: K,
  value: CSSStyleDeclaration[K]
): void {
  if (typeof node === "string") {
    const element = document.querySelector(node);
    if (!element) throw new Error(`${node}에 해당하는 요소를 찾을 수 없습니다.`);
    node = element;
  }

  if (!prop) throw new Error("setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.");
  if (!value) throw new Error("setStyle 함수의 세 번째 인수는 필수값 입니다.");
  (node as HTMLElement).style[prop] = value;
}

type CSS = <K extends keyof CSSStyleDeclaration>(
  node: Element | string,
  prop: K,
  value?: CSSStyleDeclaration[K]
) => void | CSSStyleDeclaration[K];

const css: CSS = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
};

css("body", "color");

type GetNode = (node: Element | string, context?: Document | Element | string) => Element | null;

const getNode: GetNode = (node, context = document) => {
  if (typeof context === "string") {
    const foundContext = document.querySelector(context);
    if (!foundContext) {
      throw new Error(`${context}에 해당하는 요소를 찾을 수 없습니다`);
    }
    context = foundContext;
  }
  if (typeof node === "string") {
    const foundNode = (context as Document | Element).querySelector(node);

    if (!foundNode) {
      throw new Error(`${node}에 해당하는 요소를 찾을 수 없습니다`);
    }

    return foundNode;
  }

  if (node instanceof Element) {
    return node;
  }
  throw new Error("node는 문자열 또는 DOM요소이어야 합니다");
};

getNode("a");

const a = document.querySelector(".box");

if (a) {
  getNode(".target", a);
}
