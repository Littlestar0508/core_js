// 문제: 각 함수들의 매개변수 타입을 지정하여 에러가 발생하지 않도록 만들어주세요.
export function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}
function getDay(num) {
    switch (num) {
        case 0:
            return "월";
        case 1:
            return "화";
        case 2:
            return "수";
        case 3:
            return "목";
        case 4:
            return "금";
        case 5:
            return "토";
        case 6:
            return "일";
    }
    return "";
}
function weekend() {
    const today = getDay(getRandomInt(7));
    let day = today.includes("토") ? "토요일" : today.includes("일") ? "일요일" : "평일";
    return day;
}
function rem(pxValue, base = 0) {
    if (typeof pxValue === "string")
        pxValue = parseInt(pxValue, 10);
    return pxValue / base + "rem";
}
let pow = (numeric, powerCount) => {
    let result = 1;
    for (let i = 0; i < powerCount; i++) {
        result *= numeric;
    }
    return result;
};
let repeat = (text, repeatCount) => {
    let result = "";
    for (let i = 0; i < repeatCount; i++) {
        result += text;
    }
    return result;
};
let calculateTotal = function (...args) {
    let total = 0;
    args.forEach((a) => {
        total += a;
    });
    return total;
};
calculateTotal(10, 20, 30);
const movePage = (url, success, fail) => {
    if (url.match(/http.+www/) && typeof url === "string") {
        success(url);
    }
    else {
        fail({ message: "에러입니다" });
    }
};
movePage("https:www.naver.com", (url) => console.log(url), (err) => {
    console.log(err);
    throw new Error("..");
});
const swapElements = (array, a, b) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    return array;
};
const numbers = [1, 2, 3, 4];
console.log(swapElements(numbers, 0, 3)); //  [4, 2, 3, 1]
const words = ["apple", "banana", "cherry"];
console.log(swapElements(words, 1, 2)); //  ["apple", "cherry", "banana"]
const delay = (callback, timeout = 1000) => {
    setTimeout(callback, timeout);
};
delay((data) => data, 1000);
