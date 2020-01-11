import Machine from './Machine.js';
import Buttons from '../mocks/Buttons.js';

class Calculator {
  constructor(display) {
    this._display = display;
  }

  /**
   * @description Checks if user clicked on a button.
   * @param {Object} element HTMLElement that was clicked by the user. 
   * @returns {String} Value representing the button meaning.
   */
  checkIfClickedOnBtn(element) {
    return element.getAttribute('type') === 'button' && element.hasAttribute('data-character');
  }

  /**
   * @description Checks if user clicked on a button that triggers an action.
   * @param {Object} element HTMLElement that was clicked by the user.
   * @returns {Boolean} Whether it is an action or not.
   */
  checkIfAction(element) {
    return Buttons[element.getAttribute('data-character')].type === 'action';
  }

  /**
   * @description Clear the calculator display.
   */
  clear() {
    this._display.textContent = '';
  }

  /**
   * @description Calculates and prints an algebraic operation on the display.
   * @param {String} expression String that supposedly represents an algebraic operation.
   */
  equal(expression) {
    this._display.textContent = Machine.calculate(expression)
      .toString();
  }

  /**
   * @description Watches the click event on the calculator.
   */
  click() {
    if (this.checkIfClickedOnBtn(event.target)) {
      if (this.checkIfAction(event.target)) {
        this[Buttons[event.target.getAttribute('data-character')].action](this._display.textContent);
      } else {
        this.print(Buttons[value]);
      }
    }
  }
}
