import { IError } from '@/shared/error';

export interface IGeneratorCodeService {
  /**
   * Esse método será immplementado para gerar um código
   * @param digits defini quantos digitos têm o código
   * @param type defini o tipo de código, pode ser por números, letras ou misturado
   */
  generate(
    digits: number,
    type: 'MIXED' | 'CHARACTER' | 'NUMBERS',
  ): Promise<string | IError>;
}
