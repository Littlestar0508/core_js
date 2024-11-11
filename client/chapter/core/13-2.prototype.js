/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// object literal => function constructor => class syntax 순으로 진행했다

class Animal {
  legs = 4;
  tail = true; // public class field라 부른다
  // #name = 'unknown';

  // 최초 1회만 실행 => 초기화할때 많이 사용한다
  constructor(name) {
    this.name = name;
    this.stomach = [];
    // this.legs = 4;
    // this.tail = true; 이는 legs = 4 와 tail = true와 같은 역할을 한다
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

class Tiger extends Animal {
  constructor(name) {
    super();
    this.pattern = '호피무늬';
  }

  // instance method이다 -> Tiger만 사용할 수 있으므로
  hunt(target) {
    this.prey = target;
    return `${target}에게 접근`;
  }

  static bark(sound) {
    return sound + '소리를 냄';
  }
}

const a = new Animal('몽실이');
const newTiger = new Tiger('호돌이');

/*
1. 버튼 선태 
2. 클릭 이벤트
3. 태그 만들기
4. 태그 화면에 랜더링 하기 
*/

//class로 정리하기
class Button {
  constructor(node) {
    this.button = document.querySelector(node);
    this.count = 0;
    this.attachEvent();
  }

  createTag() {
    return `<div>${++this.count + ' ' + 'clicked!!'}</div>`;
  }

  #render() {
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick() {
    this.#render();
  }

  attachEvent() {
    this.button.addEventListener('click', () => this.handleClick());
  }
} // 이 안에서 this는 버튼 태그를 가리킨다 -> attachEvent에서 this.button이 호출했기 때문에
// 문제를 해결하기 위해서는 this를 바꿔야 한다 이때 바인드를 필요로 한다 혹은 화살표 함수로 바꿔도 된다

const button = new Button('.btn');

// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag() {
//   return `<div>${++count + ' ' + 'clicked'} </div>`;
// }

// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   render(createTag());
// }

// 함수를 작동하는 별로 분리할 수 있다 태그 생성 / 태그 추가 / click작동

// button.addEventListener('click', handleClick);

class User {
  #password;

  constructor(userId, userPW) {
    this.userId = userId;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw) {
    return 'hashCode' + pw + 'randomValue';
  }

  checkPassword(pw) {
    return this.#password === this.hashPassword(pw);
  }
}

const user = new User('tiger', 'asdf1234');
