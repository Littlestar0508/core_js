// named export
// default export

import {
  getNode as $,
  getNodes,
  clearContents,
  insertLast,
  typeError,
  isString,
} from './lib/index.js';

// input의 value값 가져오기

function phase1() {
  const first = $('#firstNumber');
  const second = $('#secondNumber');
  const result = $('.result');
  const clear = $('#clear');

  function handleInput() {
    let firstValue = +first.value;
    let secondValue = +second.value;

    const total = firstValue + secondValue;

    clearContents(result);

    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);

  clear.addEventListener('click', handleClear);
}

function phase2() {
  const calculator = $('.calculator');
  const result = $('.result');
  const clear = $('#clear');
  const numberInputs = [...getNodes('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + +cur.value, 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

phase2();
