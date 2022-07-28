import { DecoratorResponse, DecoratorTarget } from '@/2-business/types';

/**
 * This is a decorator function that can be used to check if the value of the
 * decorated property is equal to the value of the property passed by parameter
 * @param propKey - property key to be compared
 * @returns {DecoratorResponse}
 */
const IsEqualToProp = (propKey: string): DecoratorResponse => {
  return (target: DecoratorTarget, propertyKey: string) => {
    return;
  };
};

export { IsEqualToProp };
