import {
  star,
  getNode,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const userCardInner = getNode('.user-card-inner');
// 1. user 데이터 fetch
// 2. fetch 데이터 유저의 이름만 출력

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    const response = await star.get(END_POINT);
    const data = response.data;

    // getNode('.loadingSpinner').remove();

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });

    data.forEach((user) => renderUserCard(userCardInner, user));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -300,
      opacity: 0,
      stagger: {
        amount: 1,
      },
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }

  // console.log(data);
  // data.forEach(({ username, email, website }) => {
  //   const tag = /*HTML */ `<article class="user-card" data-index="user-${++i}">
  //         <h3 class="user-name">${username}</h3>
  //         <div class="user-resouce-info">
  //           <div>
  //             <a class="user-email" href="mailto:${email}"
  //               >${email}</a
  //             >
  //           </div>
  //           <div>
  //             <a
  //               class="user-website"
  //               href="http://${website}"
  //               target="_blank"
  //               rel="noopener noreferer"
  //               >${website}</a
  //             >
  //           </div>
  //         </div>
  //         <button class="delete">삭제</button>
  //       </article>`;
  //   insertLast(userCardInner, tag);
  // });
}

renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.parentElement;

  const index = article.dataset.index.slice(5);

  star.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제 완료!');
  }); // 지금은 dummy data라서 실제로 삭제는 되지 않는다
}

userCardInner.addEventListener('click', handleDelete);
