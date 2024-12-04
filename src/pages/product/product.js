console.log("hello");

const END_POINT = "http://127.0.0.1:8090/api/collections/products/records";

async function renderProduct() {
  const response = await fetch(END_POINT);
  const data = await response.json();

  console.log(data.items);

  const tag = /*html*/ `
  <div class="container">
      <ul>
      ${data.items
        .map((index) => {
          return ` <li>
            <a href="/">
              <figure>
                <img src="/src/assets/visual.webp" alt="" />
              </figure>
              <span class="brand">${index.brand}</span>
              <span class="description">${index.description}</span>
              <span class="price">${index.price}원</span>
              <div>
                <span class="discount">${index.discount}%</span>
                <span class="real-price">${index.price * ((100 - index.discount) / 100)}원</span>
              </div>
            </a>
          </li>`;
        })
        .join("")}
      </ul>
    </div>
    `;

  document.body.insertAdjacentHTML("beforeend", tag);
}

renderProduct();
