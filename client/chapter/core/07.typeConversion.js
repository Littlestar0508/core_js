/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof YEAR); //number

console.log(typeof String(YEAR)); //String
console.log(String(YEAR)); // 2024

console.log(YEAR + '');
console.log(typeof (YEAR + ''));

// undefined, null
const days = null;
console.log(days + '');
console.log(typeof (days + ''));

const undef = undefined;
console.log(undef + '');
console.log(typeof String(undef));

// boolean
let isClicked = true;

console.log(String(isClicked));
console.log(typeof String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
console.log(undef * 1);
console.log(typeof undef * 1);

console.log(Number(undef));

// null
let money = null;
console.log(Number(money));
console.log(money / 1);

// boolean
let isActive = true;

console.log(Number(isActive));
console.log(isActive * 1);

// string
let num = '100';

console.log(+num);
console.log(typeof +100);

let num1 = '100z';

console.log(Number(num1));

// numeric string
const width = '120.5px';
console.log(parseFloat(width, 10)); //120.5
console.log(parseInt(width, 10)); //120

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(undef)); //false
console.log(Boolean(money)); //false
console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(' ')); //true
console.log(Boolean('0')); //true
console.log(!!'0'); //true
console.log(!!{}); //true
console.log(!![]); //true
console.log(Boolean(() => {})); //true
