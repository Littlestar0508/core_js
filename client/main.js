import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

// 1. input 이벤트 바인딩
// 2. input의 값을 local storage에 저장(타이핑 하는 순간순간마다)
// 3. local storage에 있는 값을 가져와 input의 value로 설정
// 4. 새로 고침을 했을 때도 데이터 유지
// 5. clear 버튼 클릭 시 데이터 제거(local storage,input)

const textField = getNode('#textField');
const button = getNode('button');

function init() {
  textField.value = getStorage('text').then((res) => (textField.value = res));
}

function handleInput() {
  setStorage('text', this.value);
}

function handleClear() {
  textField.value = '';
  deleteStorage('text');
}

textField.addEventListener('input', handleInput);

button.addEventListener('click', handleClear);

init();
