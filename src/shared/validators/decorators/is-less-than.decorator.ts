import { DecoratorResponse, DecoratorTarget } from '@/2-business/types';

/**
 * This is a decorator function that can be used to validate if a value length
 * is less than the allowed length
 * @param {number} length - length of the string
 * @returns {DecoratorResponse}
 */
const IsLessThan = (length: number): DecoratorResponse => {
  return (target: DecoratorTarget, propertyKey: string) => {
    return;
  };
};

export { IsLessThan };
