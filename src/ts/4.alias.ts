// alias type

// type
type User = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

// interface
interface _User {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

const user1: User = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

const user2: _User = {
  id: 2,
  name: "beom",
  auth: "admin",
  isPaid: false,
};

// index signature
// 객체의 키가 동적으로 결정될 때 유용하게 사용 가능
type Person = {
  name: string;
  age: number;
  [key: string]: string | number;
};

const person: Person = {
  name: "hey",
  age: 30,
  email: "heyhey@hey.com",
  address: "서울",
  phone: "01012345678",
};
