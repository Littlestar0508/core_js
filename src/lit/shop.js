import { LitElement, html, css } from "lit";
import s from "/src/lit/shop.css?inline";

const data = [
  { id: 1, product: "소고기 샤브샤브 밀키트", price: 15900, quantity: 3 },
  { id: 2, product: "비빔밥 세트", price: 11900, quantity: 5 },
  { id: 3, product: "차돌박이 숙주 볶음", price: 10320, quantity: 2 },
];

// class ShoppingList extends LitElement {
//   static properties = { state: true };

//   static styles = css/* css */ `
//     .itemList {
//       display: flex;
//       width: 400px;
//       gap: 8px;
//       padding: 1rem;
//       position: relative;
//       border: 1px solid #aeaeae;
//       margin: 1rem;

//       .textContainer {
//         display: inline-flex;
//         justify-content: space-between;
//         flex-direction: column;
//         font-weight: bold;

//         .quantityText {
//           font-weight: 400;
//         }
//       }

//       .deleteBtn {
//         position: absolute;
//         top: 0.25rem;
//         right: 0.25rem;
//         background-color: #dd2200;
//         border: none;
//         color: white;
//         border-radius: 4px;
//       }
//     }
//   `;

//   constructor() {
//     super();

//     this.data = [...data];
//   }

//   render() {
//     return html`
//       <ul>
//         ${this.data.map(
//           ({ id, product, price, quantity }) => html`
//             <li class="itemList">
//               <img src="https://picsum.photos/100/100" />
//               <div class="textContainer">
//                 <div>${product}</div>
//                 <div>${price}원</div>
//                 <div class="quantityText">${quantity}</div>
//               </div>
//               <button class="deleteBtn">삭제</button>
//             </li>
//           `
//         )}
//       </ul>
//     `;
//   }
// }

// customElements.define("shop-list", ShoppingList);

// app.append(document.createElement("shop-list"));

class Product extends LitElement {
  static properties = {
    _productItems: {},
    productCount: {},
  };

  constructor() {
    super();

    this._productItems = [...data];
    this.productCount = this._productItems.length;
  }

  handleDelete(id) {
    this._productItems = this._productItems.filter((item) => item.id !== id);
  }

  handleAdd(e) {
    e.preventDefault();
    this._productItems = [
      ...this._productItems,
      {
        id: this.productCount + 1,
        product: this.product.value,
        price: this.price.value,
        quantity: this.quantity.value,
      },
    ];
  }

  get product() {
    return this.renderRoot.querySelector("#product") ?? null;
  }
  get price() {
    return this.renderRoot.querySelector("#price") ?? null;
  }
  get quantity() {
    return this.renderRoot.querySelector("#quantity") ?? null;
  }

  render() {
    return html/* HTML */ `
      <style>
        ${s}
      </style>
      <div class="container">
        <h2>장바구니</h2>
        <ul class="list">
          ${this._productItems.map(
            (item) =>
              html`
                <li .id=${item.id}>
                  <figure>
                    <img src="https://picsum.photos/100/100" alt="" />
                  </figure>
                  <div class="detail">
                    <span>${item.product}</span>
                    <span>${item.price}원</span>
                    <span>${item.quantity}</span>
                  </div>
                  <button type="button" class="delete" @click=${() => this.handleDelete(item.id)}>
                    삭제
                  </button>
                </li>
              `
          )}
        </ul>
        <form class="register">
          <div>상품명 : <input id="product" type="text" /></div>
          <div>가격 : <input id="price" type="number" /></div>
          <div>수량 : <input id="quantity" type="number" /></div>
          <button type="submit" class="add" @click=${this.handleAdd}>추가</button>
        </form>
      </div>
    `;
  }
}

customElements.define("c-product", Product);

app.append(document.createElement("c-product"));
