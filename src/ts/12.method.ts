const arr = [1, 2, 3];

function map<T, U>(arr: T[], callback: (n: T) => U): U[] {
  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (n) => n * 2);

type ForEach<T> = {
  arr: T[];
  callback: (n: T) => void;
};

const forEach: ForEach = <T>(arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

forEach(arr, (n) => {
  console.log(n);
});
