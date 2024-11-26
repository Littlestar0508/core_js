// class MyElement extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     // 탄생
//     console.log('탄생');
//   }

//   disconnectedCallback() {
//     // 죽음
//     console.log('죽음');
//   }

//   static get observedAttributes() {
//     return ['data-name'];
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(name, oldValue, newValue);
//   }
// }

// customElements.define('my-element', MyElement);

customElements.define(
  'user-info',
  class extends HTMLElement {
    // constructor() {
    //   super();
    //   console.log(this.getAttribute('data-name'));
    // }

    connectedCallback() {
      console.log(this.getAttribute('data-name'));
    }
  }
);

class Button extends HTMLButtonElement {
  constructor() {
    super();
  }
}

customElements.define('my-button', Button, { extends: 'button' });

class MyElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /*HTML */ `
    <div class='card' >
      <slot name='title'></slot>
      <slot name='content'></slot>
    </div>
    `;
  }
}

customElements.define('my-element', MyElement);
