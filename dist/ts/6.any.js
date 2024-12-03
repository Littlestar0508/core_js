// any type
let obj;
obj = { x: 10 };
obj = 123;
obj = () => { };
obj.toUpperCase();
// unknown type
let arr;
arr = 1;
arr = "hello";
arr = [1, 2, 3];
// 타입 좁히기(narrowing)
if (typeof arr === "number") {
    arr.toFixed();
}
export {};
