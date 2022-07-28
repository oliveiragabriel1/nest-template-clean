import {
  IInputProcessValidAccountEmailDto,
  IOutputProcessValidAccountEmailDto,
} from '@/2-business/types/dtos/validate-account/process-valid-account-email.dto';
import { ProcessValidAccountUseCase } from '@/2-business/usecases/process-valid-account-example/process-valid-account.usecase';
import { AbstractController } from '../abstract.controller';

export class ProcesesValidAccountController extends AbstractController<
  IInputProcessValidAccountEmailDto,
  IOutputProcessValidAccountEmailDto
> {
  /**
   * Constructor for CreateUserController
   * @param createUserUseCase
   * @param findOneUserUseCase
   */
  constructor(
    private readonly processValidAccountUseCase: ProcessValidAccountUseCase,
  ) {
    super();
  }

  /**
   * Este método vai gerar um código que será colocado em uma fila
   * @param input
   * @returns {IInputValidateAccountEmailDto}
   */
  public async run(
    input: IInputProcessValidAccountEmailDto,
  ): Promise<IOutputProcessValidAccountEmailDto> {
    return await this.processValidAccountUseCase.exec(input);
  }
}
