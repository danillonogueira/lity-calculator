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
      const character = event.target.getAttribute('data-meaning');
      
      // Whether user clicked on an button that triggers an operation.
      if (this._calculatorHelper.checkIfAction(event.target)) {
        this._calculatorHelper.dispatch(character);

      // Whether user clicked on a button that inputs a number or symbol.
      } else {
        this._calculatorHelper.print(character);
      }
    }
  }
}
