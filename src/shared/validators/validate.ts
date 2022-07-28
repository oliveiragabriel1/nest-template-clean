import { DecoratorTarget } from '@/2-business/types';
import { IValidationRule } from './add-validation-rule';

/**
 * This is a function that can be used to validate the values of the class.
 * This function is executed after the class constructor is called.
 * Each validation error found is added to the target.errors array.
 * @param {DecoratorTarget} target - The target object to be evaluated
 * @returns {string[]} - The error messages if the validation fails
 */
const validate = (target: DecoratorTarget): string[] => {
  const keys = Reflect.getMetadata('validation', target) as string[];
  if (Array.isArray(keys)) {
    for (const key of keys) {
      const rules = Reflect.getMetadata(
        'validation',
        target,
        key,
      ) as IValidationRule[];
      if (!Array.isArray(rules)) {
        continue;
      }

      for (const rule of rules) {
        const error = rule.evaluate(target, target[key], key);
        if (error) {
          target.errors.push(error);
        }
      }
    }
  }

  return target.errors;
};

export { validate };
