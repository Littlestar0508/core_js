// 문제 : unknownValue 변수에 unknown 타입을 명시 후 아래와 같은 메서드가 실행될 수 있도록 만들어주세요

let unknownValue: unknown;

// unknownValue.toFixed(2);
if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

// unknownValue.toUpperCase();
else if (typeof unknownValue === "string") {
  unknownValue.toUpperCase();
}

// unknownValue.getTime();
else if (unknownValue instanceof Date) {
  unknownValue.getTime();
}

// unknownValue.nextElementSibling
else if (unknownValue instanceof HTMLElement) {
  unknownValue.nextElementSibling;
}
