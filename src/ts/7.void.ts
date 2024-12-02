// void type

function sayHI(): string {
  return "hello";
}

function printHI(): void {
  console.log("hello");
}

printHI();

// never type
// 존재하지 않는, 불가능한, 어떤 값도 정의할 수 없는 타입

function showError(message: string): never {
  throw new Error(message);
}

showError("해당 함수는 에러가 발생했습니다.");

function loop(): never {
  while (true) {
    // ...
  }
}
