import { Characters } from '../mocks/Characters';

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
   * @description Trims an algebraic expression removing whitespace and ending symbols.
   * @param {String} expression Expression to be trimmed.
   * @returns {String} Trimmed expression. 
   */
  static trimExpression(expression) {
    const newExp = expression.replace(/\s/g, '').split('');
    const last = newExp[newExp.length - 1];

    if (last === '+' || last === '-' || last === '*' || last === '/') {
      newExp.splice(newExp.length - 1, 1);
    }

    return newExp.join('');
  }

  /**
   * @description Checks if an expression is a real calculation.
   * @param {String} expression Expression intented to be validated.
   * @returns {Boolean} Whether it is a valid calculation or not.
   */
  static validate(expression) {
    return expression.replace(/\s/g, '')
      .split('')
      .filter(character => this.validateCharacter(character))
      .length;
  }
}
