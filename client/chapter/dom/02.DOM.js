/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');

// console.log(second.parentElement); // h1
// console.log(second.previousElementSibling); // span.first
// console.log(second.nextElementSibling); // button
// console.log(second.children); // 없으므로 빈 HTML컬렉션이 출력

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// 1. nav태그 요소
const nav = document.getElementsByTagName('nav')[0];
const _nav = document.querySelector('nav');

// 2. nav태그 내부에 존재하는 about li 태그 요소
const about_li = nav.firstElementChild.firstElementChild;
const about = nav.querySelector('ul>li:nth-child(1)');

// 3. data-name이 contact인 li 태그 요소
const contact = nav.firstElementChild.getElementsByClassName('contact');
const _contact = nav.querySelector('li[data-name = "contact"]');

// 4. nav 요소 안에 있는 모든 자식 요소
const children = nav.children[0].children;
const _children = nav.querySelectorAll('*');

const li = [...children].find((li) => {
  return li.matches('.about');
});
/* 문서 대상 확인 */
// - matches
// - contains

console.log(getNode('.about'));

getNode('.about', 'nav');
