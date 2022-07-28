import { DecoratorResponse, DecoratorTarget } from '@/2-business/types';
import { addValidationRule, IValidationRule } from '../add-validation-rule';

class IsEmailValidationRule implements IValidationRule {
  public static instance = new IsEmailValidationRule();

  /**
   * This method is called by the decorator check if the value is a
   * valid email by testing the string against a regex.
   * If its not, the error message is returned.
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
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (String(value).match(emailRegex)) {
      return null;
    }

    return `${key} is not a valid email address`;
  }
}

/**
 * This is a decorator function that can be used to validate
 * if a value is a valid/correct email address
 * @returns {DecoratorResponse}
 */
const IsEmail = (): DecoratorResponse => {
  return (target: DecoratorTarget, propertyKey: string) => {
    addValidationRule(target, propertyKey, IsEmailValidationRule.instance);
  };
};

export { IsEmail };
