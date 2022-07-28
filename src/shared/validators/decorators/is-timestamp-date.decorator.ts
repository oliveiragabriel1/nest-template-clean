import { DecoratorResponse, DecoratorTarget } from '@/2-business/types';
import { IValidationRule, addValidationRule } from '../add-validation-rule';

class IsTimestampDateValidationRule implements IValidationRule {
  public static instance = new IsTimestampDateValidationRule();

  /**
   * This method is called by the decorator check if the value is a
   * valid yimestamp date
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
    if (new Date(value).getTime() > 0) {
      return null;
    }
    return `${key} is not a valid timestamp date. Timestamps 
    should be numeric values that represent the number of milliseconds of a 
    date before 1970-01-01T00:00:00Z.`;
  }
}

/**
 * This is a decorator function that can be used to validate if
 * a given value is a string
 * @param {number} length - length of the string
 * @returns {DecoratorResponse}
 */
const IsTimestampDate = (): DecoratorResponse => {
  return (target: DecoratorTarget, propertyKey: string) => {
    addValidationRule(
      target,
      propertyKey,
      IsTimestampDateValidationRule.instance,
    );
  };
};

export { IsTimestampDate };
