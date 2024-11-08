/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// object literal 방식
const animal = {
  legs: 4,
  tail: true,

  //getter
  get eat() {
    return this.stomach;
  },
  //setter
  set eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다`;
  },
  __proto__: animal,
};

const white_tiger = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

const yellow_tiger = {
  name: '한돌이',
  color: 'yellow',
  __proto__: tiger,
};

// 생성자 함수
function Animal() {
  this.legs = 4;
  this.tail = true;

  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다`;
  };
}

const Stiger = new Tiger('금순이');
