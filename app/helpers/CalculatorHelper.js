import Buttons from '../mocks/Buttons';
import Machine from '../core/Machine';

export class CalculatorHelper {
  constructor(display) {
    this._display = display;
  }

  /**
   * @description Checks if user clicked on a button.
   * @param {Object} element HTMLElement that was clicked by the user. 
   * @returns {String} Value representing the button meaning.
   */
  checkIfClickedOnBtn(element) {
    return element.getAttribute('type') === 'button' && element.hasAttribute('data-meaning');
  }

  /**
   * @description Checks if user clicked on a button that triggers an action.
   * @param {Object} element HTMLElement that was clicked by the user.
   * @returns {Boolean} Whether it is an action or not.
   */
  checkIfAction(element) {
    return Buttons[element.getAttribute('data-meaning')].type === 'action';
  }

  /**
   * @description Clear the calculator display.
   */
  clear() {
    this._display.textContent = '';
  }

  /**
   * @description Exceutes and prints the result of an algebraic operation on the display.
   * @param {String} expression String that supposedly represents an algebraic operation.
   */
  equal(expression) {
    this._display.textContent = Machine.calculate(expression)
      .toString();
  }

  /**
   * @description Inputs a new value (number of symbol) on the display.
   * @param {String} input Name of the button user clicked. 
   */
  print(input) {
    this._display.texContent.concat(' ', Buttons[input].value);
  }

  /**
   * @description Executes a calculator action (equal or clear).
   * @param {String} action Action to be executed.
   */
  dispatch(action) {
    this[Buttons[action].action]();
  }
}