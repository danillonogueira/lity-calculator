import { Calculator } from './app/core/Calculator';
import './app/styles/main.scss';

const $ = document.querySelector.bind(document);
const calculator = new Calculator($('#screen'));


document.querySelectorAll.bind(document)('input[type="button"]').forEach((button) => {
  button.addEventListener('click', calculator.click.bind(calculator));
});

