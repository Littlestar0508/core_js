// number, string, boolean, null, undefined ...
// number type
let num1 = 10;
let num2 = NaN;
let num3 = -123;
let num4 = 0.1231276;
num1 = 20;
// num4.toUpperCase(); -> 오류(number에는 존재하지 않는 메서드)
// num1 = "20"; -> 오류
// string type
let str1 = "hi";
let str2 = `hi`;
let str3 = `hi${num2}`;
//boolean type
let bool1 = true;
let bool2 = true;
// null type
let nullA = null;
// undefined type
let undef = undefined;
// literal type
let numA = 10;
// numA = 100; numA는 10이라고 명시했으니 다른 값은 오류가 난다
let strA = "hello";
// strA = 'h' -> 오류
let boolA = true;
// boolA = false -> 오류
//unknown type
let unknown;
// never type
let never;
// any type
let any;
export {};
