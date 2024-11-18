const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (d) => (d.style.height = 0);

function vanilla() {
  //header의 높이값을 가져와서 depth값을 top으로 설정
  depthList.forEach((depth) => (depth.style.top = header.offsetHeight + 'px'));

  // 반복문으로 eventbinding
  const handleEnter = (e) => {
    console.log(e.currentTarget);

    const currentDepth = e.currentTarget.lastElementChild;

    depthList.forEach(h);

    currentDepth.style.height = '100px';
  };

  aList.forEach((value) => {
    value.addEventListener('mouseenter', handleEnter);
  });

  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  });
}

/* global gsap */

gsap.set(depthList, { top: header.offsetHeight });

aList.forEach((a) => {
  const currentDepth = a.lastElementChild;

  const tl = gsap
    .timeline({ paused: true })
    .to(currentDepth, { height: 100, ease: 'power2.inOut' });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
