import { LitElement, html, css } from "lit";
import s from "/src/lit/test.css?inline";

class TodoList extends LitElement {
  static properties = {
    _listItems: { state: true },
    hideCompleted: {},
  };

  static styles = css`
    .completed {
      text-decoration: line-through;
      color: #777;
    }
  `;

  constructor() {
    super();

    this._listItems = [
      { text: "독서하기", completed: true },
      { text: "영화보기", completed: false },
    ];

    this.hideCompleted = false;
  }

  get input() {
    return this.renderRoot.querySelector(".newItem") ?? null;
  }

  addTodoItem() {
    if (this.input.value) {
      this._listItems = [...this._listItems, { text: this.input.value, completed: false }];
    }

    this.input.value = "";
  }

  toggleCompleted(item) {
    item.completed = !item.completed;

    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;

    const finishMessage = html` <p>빨래 끝~</p> `;

    const todos = html`
      <ul>
        ${items.map(
          (item) =>
            html`<li
              class="${item.completed ? "completed" : ""}"
              @click=${() => this.toggleCompleted(item)}
            >
              ${item.text}
            </li>`
        )}
      </ul>
    `;

    const todosOrMessage = items.length > 0 ? todos : finishMessage;

    return html/* HTML */ `
      <style>
        ${s}
      </style>
      <h2 class="title">To Do List</h2>
      ${todosOrMessage}
      <label id="newItem">
        <input type="text" class="newItem" id="newItem" aria-label="새로운 아이템" />
      </label>
      <button type="button" @click=${this.addTodoItem}>추가</button>
      <hr>
      <label>
        <input type="checkbox" @change=${this.setHideCompleted}>Hide Completed</input>
      </label>
    `;
  }
}

customElements.define("todo-list", TodoList);

app.append(document.createElement("todo-list"));
