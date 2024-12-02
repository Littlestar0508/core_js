// Array Type
let arr: number[] = [1, 2, 3];

let str: string[] = ["a", "b", "c"];

// generic Type 타입 변수 => 함수
let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ["a", "b", "c"];

// 한 배열 내부에서 여러 가지 타입을 받을때
let multi: (string | number | boolean)[] = ["hello", 10, false];

// 자리를 정하고, 필수적으로 입력하도록 유도할때 Tuple type사용

// Tuple Type
let tupleA: [number, number] = [1, 2];

// 길이가 고정되어있다. 배열처럼 길이가 동적으로 변하지 않는다. 자리가 고정되어있다
const user: [string, number][] = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];