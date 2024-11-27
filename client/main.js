import { Button } from './components/Button1/Button.js';
import { Card } from './components/Card/Card.js';

const app = document.getElementById('app');

function defineElements() {
  customElements.define('custom-button', Button);
  customElements.define('custom-card', Card);
}

defineElements();

const buttonElement = document.createElement('custom-button');

// app.append(buttonElement);
