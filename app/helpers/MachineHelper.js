import Characters from '../mocks/Characters';

export class MachineHelper {
  /**
   * @description Checks if a certain character is valid.
   * @requires Characters
   * @param {String} character Character intented to be validated.
   * @returns {Array} Array containing the valid character.
   */
  static validateCharacter(character) {
    return Characters.filter(validCharacter => character === validCharacter).length; 
  }

  /**
   * @description Checks if an expression is a real calculation.
   * @param {String} expression Expression intented to be validated.
   * @returns {Boolean} Whether it is a valid calculation or not.
   */
  static validate(expression) {
    let isValid = true;

    expression.split('')
      .forEach((pretentiousCharacter) => {
        if (!this.validateCharacter(pretentiousCharacter)) {
          isValid = false;
        }
      });

    return isValid;
  }
}
