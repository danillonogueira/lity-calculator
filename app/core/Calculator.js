import { CalculatorHelper } from '../helpers/CalculatorHelper';

export class Calculator {
  constructor(element) {
    this._calculatorHelper = new CalculatorHelper(element);
  }

  /**
   * @description Watches the click event on the calculator.
   */
  click() {
    if (this._calculatorHelper.checkIfClickedOnBtn(event.target)) {
      if (this._calculatorHelper.checkIfAction(event.target)) {
        this._calculatorHelper.dispatch(event.target.getAttribute('data-character'));
      } else {
        this._calculatorHelper.print(Buttons[value]);
      }
    }
  }
}
