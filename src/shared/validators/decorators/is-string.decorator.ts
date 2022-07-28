import { DecoratorResponse, DecoratorTarget } from '@/2-business/types';
import { IValidationRule, addValidationRule } from '../add-validation-rule';

class IsStringValidationRule implements IValidationRule {
  public static instance = new IsStringValidationRule();

  /**
   * This method is called by the decorator check if the value is a
   * string. If its not, the error message is returned.
   * @param {DecoratorTarget} target - The target object to be evaluated
   * @param {any} value - The current value that will be evaluated
   * @param {string} key - The property key that of the target object
   * @returns {string | null} - The error message if the validation fails,
   * otherwise null
   */
  public evaluate(
    target: DecoratorTarget,
    value: any,
    key: string,
  ): string | null {
    const varType = typeof value;
    if (varType === 'string') {
      return null;
    }

    return `${key} is not a string, the type received was ${varType}`;
  }
}

/**
 * This is a deocator function that can be used to validate
 * if a value is a string
 * @returns {DecoratorResponse}
 */
const IsString = (): DecoratorResponse => {
  return (target: DecoratorTarget, propertyKey: string) => {
    addValidationRule(target, propertyKey, IsStringValidationRule.instance);
  };
};

export { IsString };
