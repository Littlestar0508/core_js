// void type
function sayHI() {
    return "hello";
}
function printHI() {
    console.log("hello");
}
printHI();
// never type
// 존재하지 않는, 불가능한, 어떤 값도 정의할 수 없는 타입
function showError(message) {
    throw new Error(message);
}
showError("해당 함수는 에러가 발생했습니다.");
function loop() {
    while (true) {
        // ...
    }
}
export {};
