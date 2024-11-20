import {
  clearContents,
  getNode as $,
  insertLast,
  getRandom,
  addClass,
  removeClass,
  showAlert,
  isNumericString,
} from './lib/index.js';
import data from './data/data.js';
// phase1
// 1. 주접 떨기 버튼을 클릭하는 함수
//    -주접 떨기 버튼 이벤트
//    -이벤트 연결

// 2. input 값 가져오기

// 3. data 함수에서  주접 1개 꺼내기
//    -n번쨰 random 주접을 꺼내기
//    -Math.random();

//  4. result에 렌더링하기
//    - insertLast()

// phase2

//  5. 예외 처리
//    - 이름이 없을 경우 콘솔에 에러 출력
//    - 숫자만 들어오면 콘솔에 에러 출력

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');
const alert = $('.alert');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replaceAll(' ', '') === '') {
    showAlert('.alert-error', '공백은 허용하지 않습니다.', 1200);

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해주세요.', 1200);

    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

submit.addEventListener('click', handleSubmit);
