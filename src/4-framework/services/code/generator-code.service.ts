import { IGeneratorCodeService } from '@/2-business/services/generator-code/generator-code.service';
import { IError } from '@/shared/error';
import randomstring from 'randomstring';

export class GeneratorCodeService implements IGeneratorCodeService {
  /**
   * Aqui é reponsável por gerar um código
   * @param digits quantidade digítos do código
   * @param type defini o tipo de código
   */
  public async generate(
    digits: number,
    type: 'MIXED' | 'CHARACTER' | 'NUMBERS',
  ): Promise<string | IError> {
    return await new Promise((resolve) => {
      switch (type) {
        case 'MIXED':
          resolve(
            randomstring.generate({
              length: digits,
              charset: 'alphanumeric',
              capitalization: 'uppercase',
            }),
          );
          break;
        case 'CHARACTER':
          resolve(
            randomstring.generate({
              length: digits,
              charset: 'alphabetic',
              capitalization: 'uppercase',
            }),
          );
          break;
        case 'NUMBERS':
          resolve(
            randomstring.generate({
              length: digits,
              charset: 'numeric',
            }),
          );
          break;
      }
    });
  }
}
