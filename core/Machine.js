import MachineHelper from '../helpers/MachineHelper';

export class Machine {
  /**
   * @description 
   * @param {String} expression Expression that is supposed to be calculated.
   * @returns {Number} Result of the calculation.
   */
  static calculate(expression) {
    if (MachineHelper.validate(expression)) {
      return eval(expression);
    }

    throw new Error('There was an issue while calculating');
  }
}
