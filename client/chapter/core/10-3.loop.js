/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
let iter = 0;
while (iter <= 10) {
  iter++;
  if (iter % 2 !== 0) {
    continue;
  }
  console.log(iter);
}

for (let p = 0; p < 10; p++) {
  if (p % 2 !== 0) {
    continue;
  }
  console.log('p :', p);
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
for (let i = 0; i < l; i++) {
  const value = frontEndDev[i];
  if (value === 'SVG' || value === 'jQuery') {
    continue;
  }

  console.log(value);
}

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
for (let i = 0; i < l; i++) {
  const value = frontEndDev[i];
  if (value === 'JavaScript') {
    console.log(value);
    break;
  }
  console.log(value);
}

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let i = 0; i < l; i++) {
  console.log(frontEndDev.shift());
}

for (let i = l, subject; (subject = frontEndDev[--i]); ) {
  console.log(subject);
}
