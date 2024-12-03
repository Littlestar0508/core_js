// Generic Type(중요)
function sumFunc(value) {
    return value;
}
const a = sumFunc(10);
const b = sumFunc("hello");
function swapAtoB(a, b) {
    return [b, a];
}
swapAtoB(1, true);
function getLength(data) {
    return data.length;
}
const b1 = getLength([1, 2, 3]); // 3
const b2 = getLength("hi"); // 2
const b3 = getLength({ name: "tiger", length: 3 }); // 2
export {};
/*

T:Type
U:Unknown or Unique
K:Key
V:Value
E:Element
R:Return

*/
