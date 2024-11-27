export class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>@import url('./components/Card/Card.css');</style>
    <div class='card'>
      <figure>
        <img src="./assets/visual.jpg" alt="" />
        <figcaption class = 'a11y-hidden'>눈이 소복히 언덕 위 오두막</figcaption>
      </figure>
      <h2>Card Title</h2>
      <p>description...</p>
    </div>   
    `;
  }
}
