import { DecoratorTarget } from './decorator-target.type';

type DecoratorResponse = (target: DecoratorTarget, propertyKey: string) => void;

export { DecoratorResponse };
