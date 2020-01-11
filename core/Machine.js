import MachineHelpers from '../helpers/MachineHelpers';

class Machine {
  /**
   * @description 
   * @param {String} expression Expression that is supposed to be calculated.
   * @returns {Number} Result of the calculation.
   */
  static calculate(expression) {
    if (MachineHelpers.validate(expression)) {
      return eval(expression);
    }

    throw new Error('There was an issue while calculating');
  }
}
