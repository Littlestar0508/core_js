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
    console.log(data);
    return data;
}
const fetchD = fetchData(END_POINT);
async function render(data) {
    //데이터 받아오기
    const newD = await data;
    //렌더링
    const template = `
  ${newD}
  `;
    document.body.insertAdjacentHTML("beforeend", template);
}
render(fetchD);
export {};
