import { _User } from "./type";

const defaultOptions = {
  timeout: 1000,
  condition: true,
  data: [{ name: "tiger", age: 20 }],
};

type User = {
  name: string;
  age: number;
}[];

type Options = {
  timeout: number;
  condition: boolean;
  data: { name: string; age: number }[];
};

function delayP(options: Partial<Options>): Promise<User> {
  const { timeout, condition, data } = { ...defaultOptions, ...options };

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (condition) {
        res(data);
      } else {
        rej();
      }
    }, timeout);
  });
}

const END_POINT = "https://jsonplaceholder.typicode.com/users";

async function fetchData(url: string): Promise<_User> {
  // get 통신
  const response = await fetch(url);

  const data = await response.json();

  // 데이터 리턴
  return data;
}

const data = await fetchData(END_POINT);

function render(target: Element | HTMLBodyElement = document.body, data: _User): void {
  //데이터 받아오기

  if (Array.isArray(data)) {
    data.forEach((item) => {
      target.insertAdjacentHTML("beforeend", `<li>${item.name}</li>`);
    });
  }

  //렌더링
}

render(document.body, data);
