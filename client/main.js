import {
  star,
  getNode,
  changeColor,
  renderSpinner,
  clearContents,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const END_POINT = 'http://localhost:3000/users';
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
        each: 0.1,
        from: 'start',
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

    clearContents(userCardInner);
    renderUserList();
  }); // 지금은 dummy data라서 실제로 삭제는 되지 않는다
}

userCardInner.addEventListener('click', handleDelete);

// const button = getNode('.create');

// function handleShowCreate(e) {
//   const target = e.target.closest('div');

//   target.classList.add('open');
// }

// button.addEventListener('click', handleShowCreate);

// const cancel = getNode('.cancel');

// function handleCancel(e) {
//   const target = e.target.closest('.create');
//   target.classList.remove('open');
// }

// cancel.addEventListener('click', handleCancel);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  // this.classList.add('open');
  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {
  e.stopPropagation();
  // getNode('#nameField').focus();
  // createButton.classList.remove('open');
  gsap.to('.pop', { autoAlpha: 0 });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);

// POST 통신을 해주세요

// 1. input의 value를 가져온다.
// 2. value를 모아서 객체를 생성
// 3. 생성 버튼을 누르면 POST통신을 한다.
// 4. body에 생성한 객체를 실어보낸다.
// 5. 카드 컨텐츠 비우기
// 6. 유저카드 리렌더링

function handleDone(e) {
  e.preventDefault();

  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  const obj = { username, email, website };

  star.post(END_POINT, obj).then(() => {
    gsap.to('.pop', { autoAlpha: 0 });
    clearContents(userCardInner);
    renderUserList();

    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  });
}

doneButton.addEventListener('click', handleDone);
