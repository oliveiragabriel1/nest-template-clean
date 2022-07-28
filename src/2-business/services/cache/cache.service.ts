import { IError } from '@/shared/error';
/**
 * Esse serviço se espera que no futuro se use com algum mecanismo
 * que guarde um valor de acesso rápido e que seja usado com muita frequência
 * um dos serviços que poder ser aplicados junto a isso seria o Redis
 * Nessa inteface, tem o tipo R que é genérico e tem o expire que é opcional
 * e ele pretende-se usar para definir um tempo máximo que esse dado deve permanecer
 * registrado, e ele definido como tipo number por que isso se refere ao tempo em segundos
 */
export interface ICacheService<R> {
  readValues(key: string[]): Promise<R[] | IError>;
  getKeys(): Promise<string[] | IError>;
  addValue(key: string, value: R, expire?: number): Promise<void | IError>;
  deleteValues(key: string[]): Promise<void | IError>;
}
