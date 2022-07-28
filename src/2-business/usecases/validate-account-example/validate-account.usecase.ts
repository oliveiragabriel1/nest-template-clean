import { left, right } from '@/shared/either';
import { IAbstractUseCase } from '../abstract.usecase';
import { IError } from '@/shared/error';
import { ValidateQueueExample } from '@/2-business/types/service-type-definitions/validate-queue-example';
import {
  IInputValidateAccountEmailDto,
  IOutputValidateAccountEmailDto,
} from '@/2-business/types/dtos/validate-account/email-validate-account';
import { IGeneratorCodeService } from '@/2-business/services/generator-code/generator-code.service';
import { IQueueService } from '@/2-business/services/queue/queue.service';

class ValidateAccountUseCase
  implements
    IAbstractUseCase<
      IInputValidateAccountEmailDto,
      IOutputValidateAccountEmailDto
    >
{
  /**
   * Construtor de ValidateAccountUseCase
   * @param {IQueueService} serviceQueue
   */
  constructor(
    private readonly serviceQueue: IQueueService<
      ValidateQueueExample,
      void | IError
    >,
    private readonly generatorCodeService: IGeneratorCodeService,
  ) {}

  /**
   * Aqui fará o trabalho de colocar na fila
   * @param {IInputValidateAccountEmailDto} input
   * @returns {IOutputValidateAccountEmailDto}
   */
  public async exec(
    input: IInputValidateAccountEmailDto,
  ): Promise<IOutputValidateAccountEmailDto> {
    const code = await this.generatorCodeService.generate(4, 'NUMBERS');
    if (code instanceof IError) {
      return left(code);
    }
    const result = this.serviceQueue.sendMessage({
      to: input.toEmail,
      text: 'Your validation code:' + code,
      from: process.env.EMAIL as string,
      subject: 'Validation Code',
    });

    if (result instanceof IError) {
      return left(result);
    }

    return right(void 0);
  }
}

export { ValidateAccountUseCase };
