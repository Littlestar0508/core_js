// 숫자만 담을 수 있는 배열
let arrN: number[] = [1, 2, 3];
let _arrN: Array<number> = [4, 5, 6];

// 문자만 담을 수 있는 배열
let arrS: string[] = ["a", "b", "c"];
let _arrS: Array<string> = ["d", "e", "f"];

// 다양한 타입을 포함할 수 있는 배열(튜플 아님)
let arrV: (string | number | boolean)[] = [1, "a", true];

// 튜플로 정의
let matrix: [number, number, number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
