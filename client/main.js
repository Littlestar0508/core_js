import {
  diceAnimation,
  getNode,
  getNodes,
  attr,
  insertLast,
  endScroll,
  clearContents,
  memo,
} from './lib/index.js';

// 주사위 굴리기 버튼을 누르면 주사위가 애니메이션이 될 수 있도록 만들기

// 1. 주사위 굴리기 버튼을 선택
// 2. 클릭 이벤트 바인딩

// [애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()

// [같은 버튼 눌렀을 때]
// 1. 상태 변수 true | false
// 2. 조건 처리

// [애니메이션 재생 정지]
// 1. setInterval
// 2. clearInterval(scope)

// [기록 버튼을 누르면 table이 등장]
// 1. recordBtn에 event binding('click')
// 2. table은 .recordListWrapper의 hidden값 change

// [table 안쪽에 tr태그 데이터를 넣고 렌더링]
// 1. 태그 만들기
// 2. insertLast 함수 사용하기(tbody 안쪽에 렌더링)

// 주사위 값 : dice의 값

// <!-- <tr>
// <td>0</td>
// <td>5</td>
// <td>5</td>
// </tr> -->

//  [Item의 갯수가 많아짐에 따라 scroll을 제일 하단으로 렌더링]
// [resetBtn을 눌렀을때 모든 항목 초기화]

const [rollingBtn, recordBtn, resetBtn] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

let count = 0;
let total = 0;

const handleRollingDice = (() => {
  let isClicked = false;
  let interval;

  return () => {
    if (!isClicked) {
      interval = setInterval(diceAnimation, 100);
      recordBtn.disabled = true;
      resetBtn.disabled = true;
    } else {
      clearInterval(interval);
      recordBtn.disabled = false;
      resetBtn.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function createItem(diceNumber) {
  return /* HTML */ `
    <td>${++count}</td>
    <td>${diceNumber}</td>
    <td>${(total += diceNumber)}</td>
  `;
}

function renderRecordItem() {
  const diceNumber = Number(memo('cube').getAttribute('dice'));

  // tbody.insertAdjacentHTML('beforeend', template);
  insertLast('.recordListWrapper tbody', createItem(diceNumber));
}

const handleRecord = () => {
  recordListWrapper.hidden = false;

  renderRecordItem();
  endScroll(recordListWrapper);
};

const handleReset = () => {
  recordListWrapper.hidden = true;
  clearContents(getNode('tbody'));
  count = 0;
  total = 0;
};

rollingBtn.addEventListener('click', handleRollingDice);

recordBtn.addEventListener('click', handleRecord);

resetBtn.addEventListener('click', handleReset);
