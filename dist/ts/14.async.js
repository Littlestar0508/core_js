const defaultOptions = {
    timeout: 1000,
    condition: true,
    data: [{ name: "tiger", age: 20 }],
};
function delayP(options) {
    const { timeout, condition, data } = { ...defaultOptions, ...options };
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (condition) {
                res(data);
            }
            else {
                rej();
            }
        }, timeout);
    });
}
const END_POINT = "https://jsonplaceholder.typicode.com/users";
async function fetchData(url) {
    // get 통신
    const response = await fetch(url);
    const data = await response.json();
    // 데이터 리턴
    return data;
}
const data = await fetchData(END_POINT);
function render(target = document.body, data) {
    //데이터 받아오기
    if (Array.isArray(data)) {
        data.forEach((item) => {
            target.insertAdjacentHTML("beforeend", `<li>${item.name}</li>`);
        });
    }
    //렌더링
}
render(document.body, data);
export {};
