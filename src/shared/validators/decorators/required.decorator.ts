import { DecoratorResponse, DecoratorTarget } from '@/2-business/types';
import { addValidationRule, IValidationRule } from '../add-validation-rule';

class RequiredValidationRule implements IValidationRule {
  public static instance = new RequiredValidationRule();

  /**
   * This method is called by the decorator check if the value is truthy.
   * If its not, it means that is undefined, so the error message is returned.
   * @param target - The target object to be evaluated
   * @param value - The current value that will be evaluated
   * @param key - The property key that of the target object
   * @returns {string | null} - The error message if the validation fails,
   * otherwise null
   */
  public evaluate(
    target: DecoratorTarget,
    value: any,
    key: string,
  ): string | null {
    if (value) {
      return null;
    }

    return `${key} is required`;
  }
}

/**
 *
 * @param target
 * @param propertyKey
 */
const Required = (): DecoratorResponse => {
  return (target: DecoratorTarget, propertyKey: string) => {
    addValidationRule(target, propertyKey, RequiredValidationRule.instance);
  };
};

export { Required };
