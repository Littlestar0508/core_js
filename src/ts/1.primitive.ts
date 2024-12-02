// number, string, boolean, null, undefined ...

// number type
let num1: number = 10;
let num2: number = NaN;
let num3: number = -123;
let num4: number = 0.1231276;

num1 = 20;
// num4.toUpperCase(); -> 오류(number에는 존재하지 않는 메서드)

// num1 = "20"; -> 오류

// string type
let str1: string = "hi";
let str2: string = `hi`;
let str3: string = `hi${num2}`;

//boolean type
let bool1: boolean = true;
let bool2: boolean = true;

// null type
let nullA: null = null;

// undefined type
let undef: undefined = undefined;

// literal type
let numA: 10 = 10;
// numA = 100; numA는 10이라고 명시했으니 다른 값은 오류가 난다

let strA: "hello" = "hello";
// strA = 'h' -> 오류

let boolA: boolean = true;
// boolA = false -> 오류

//unknown type
let unknown: unknown;

// never type
let never: never;

// any type
let any: any;
