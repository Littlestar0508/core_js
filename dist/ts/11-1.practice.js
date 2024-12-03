function getCss(node, prop) {
    if (typeof node === "string") {
        const element = document.querySelector(node);
        if (!element)
            throw new Error(`${node}에 해당하는 요소를 찾을 수 없습니다.`);
        node = element;
    }
    return getComputedStyle(node)[prop];
}
function setCss(node, prop, value) {
    if (typeof node === "string") {
        const element = document.querySelector(node);
        if (!element)
            throw new Error(`${node}에 해당하는 요소를 찾을 수 없습니다.`);
        node = element;
    }
    if (!prop)
        throw new Error("setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.");
    if (!value)
        throw new Error("setStyle 함수의 세 번째 인수는 필수값 입니다.");
    node.style[prop] = value;
}
const css = (node, prop, value) => {
    return !value ? getCss(node, prop) : setCss(node, prop, value);
};
console.log(css("body", "color"));
export {};
