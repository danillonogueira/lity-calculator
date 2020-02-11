import { MachineHelper } from '../helpers/MachineHelper';

export class Machine {


  /**
   * @description Gives the result of an algebraic expression.
   * @param {String} expression Expression that is supposed to be calculated.
   * @returns {Number} Result of the calculation.
   */
  static calculate(expression) {
    if (MachineHelper.validate(expression)) {
      return eval(MachineHelper.trimExpression(expression));
    }

    throw new Error('There was an issue while calculating');
  }
}
