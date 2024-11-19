// named export
// default export

import {
  getNode,
  getNodes,
  clearContents,
  insertLast,
} from './lib/dom/index.js';

// input의 value값 가져오기

/* global clearContents */

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');

function handleInput() {
  let firstValue = +first.value;
  let secondValue = +second.value;

  const total = firstValue + secondValue;

  clearContents(result);

  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);

clear.addEventListener('click', (e) => {
  e.preventDefault();
  first.value = '';
  second.value = '';
  result.textContent = '-';
});
