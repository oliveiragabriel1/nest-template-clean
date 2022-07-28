import 'reflect-metadata';

interface IValidationRule {
  evaluate(target: any, value: any, key: string): string | null;
}

/**
 * This is a function to be used to add a validation rule to a class.
 * The addition is made using the reflect-metadata library.
 * @param {DecoratorTarget} target - The target object to be evaluated
 * @param {string} key - The current property key that of the target object
 * @param rule - The validation rule to be added, this is a class that
 * implements the IValidationRule interface, so it contains the evaluate method
 */
const addValidationRule = (
  target: any,
  propertyKey: string,
  rule: IValidationRule,
) => {
  const rules: IValidationRule[] =
    Reflect.getMetadata('validation', target, propertyKey) || [];
  rules.push(rule);

  const properties: string[] = Reflect.getMetadata('validation', target) || [];
  if (properties.indexOf(propertyKey) < 0) {
    properties.push(propertyKey);
  }

  Reflect.defineMetadata('validation', properties, target);
  Reflect.defineMetadata('validation', rules, target, propertyKey);
};

export { addValidationRule, IValidationRule };
