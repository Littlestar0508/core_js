/* -------------------- */
/* DOM Styling          */
/* -------------------- */

const nav = getNode('nav');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(nav.className);
nav.className = 'navigation';
nav.classList.add('hello');
console.log(nav.classList);
nav.classList.remove('hello');
console.log(nav.classList.contains('navigation'));

nav.classList.toggle('is-active');

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

// nav.style.background = 'red';

// nav.style.cssText = /* css */ `
// color: white;
// padding: 1rem;
// background:  black;
// `;

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// getComputedStyle(element, [pseudoElement]) `읽기 전용`
