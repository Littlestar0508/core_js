import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    checked: {},
    value: {},
  };

  constructor() {
    super();

    this.checked = false;
    this.value = "don't cry snowman";
  }

  setChecked(e) {
    this.checked = e.target.checked;
    console.log(this.checked);
  }

  render() {
    return html/* HTML */ `
      <div>
        <input type="text" .value=${this.value} ?disabled=${this.checked} />
      </div>
      <label>
        <input @change=${this.setChecked} type="checkbox" name="" id="checkbox" />
      </label>
    `;
  }
}

customElements.define("name-tag", NameTag);

app.append(document.createElement("name-tag"));
