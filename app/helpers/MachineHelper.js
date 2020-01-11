import Characters from '../mocks/Characters';

export class MachineHelper {
  /**
   * @description Verifies whether a certain character is valid.
   * @requires Characters
   * @param {String} character Character intented to be validated.
   * @returns {Boolean} Whether it is valid or not.
   */
  static validateCharacter(character) {
    return Characters.filter(validCharacter => character === validCharacter); 
  }

  /**
   * @description Checks if an expression is a real calculation.
   * @param {String} expression Expression meant to be validated.
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
