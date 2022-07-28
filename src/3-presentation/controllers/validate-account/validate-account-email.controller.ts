import { UsersErrors } from '@/2-business/errors';
import { IGeneratorCodeService } from '@/2-business/services/generator-code/generator-code.service';
import {
  IInputValidateAccountEmailDto,
  IOutputValidateAccountEmailDto,
} from '@/2-business/types/dtos/validate-account/email-validate-account';
import { ValidateAccountUseCase } from '@/2-business/usecases/validate-account-example/validate-account.usecase';
import { left, right } from '@/shared/either';
import { IError } from '@/shared/error';
import { AbstractController } from '../abstract.controller';

export class ValidateAccountEmailController extends AbstractController<
  IInputValidateAccountEmailDto,
  IOutputValidateAccountEmailDto
> {
  /**
   * Constructor for ValidateAccountEmailController
   * @param {ValidateAccountUseCase} validateAccountUseCase
   *
   */
  constructor(private readonly validateAccountUseCase: ValidateAccountUseCase) {
    super();
  }

  /**
   * Método ligado ao processo de colocar um elemento na fila
   * @param {IInputValidateAccountEmailDto} input
   * @returns {IOutputValidateAccountEmailDto}
   */
  public async run(
    input: IInputValidateAccountEmailDto,
  ): Promise<IOutputValidateAccountEmailDto> {
    const result = this.validateAccountUseCase.exec({
      toEmail: input.toEmail,
    });
    if (result instanceof IError) return left(result);
    return right(void 0);
  }
}
