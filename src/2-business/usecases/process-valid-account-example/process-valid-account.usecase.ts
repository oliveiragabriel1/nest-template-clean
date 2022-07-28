import { left, right } from '@/shared/either';
import { IAbstractUseCase } from '../abstract.usecase';
import { IError } from '@/shared/error';
import {
  IInputProcessValidAccountEmailDto,
  IOutputProcessValidAccountEmailDto,
} from '@/2-business/types/dtos/validate-account/process-valid-account-email.dto';
import { IMailService } from '@/2-business/services/mail/mail.service';

class ProcessValidAccountUseCase
  implements
    IAbstractUseCase<
      IInputProcessValidAccountEmailDto,
      IOutputProcessValidAccountEmailDto
    >
{
  /**
   * Construtor de ProcessValidAccountUseCase
   * @param {IQueueService} serviceQueue
   */
  constructor(private readonly mailService: IMailService) {}

  /**
   * Aqui fará o trabalho de processa a fila
   * @param {IInputProcessValidAccountEmailDto} input
   * @returns {IOutputProcessValidAccountEmailDto}
   */
  public async exec(
    input: IInputProcessValidAccountEmailDto,
  ): Promise<IOutputProcessValidAccountEmailDto> {
    const result = this.mailService.sendMail(input);
    if (result instanceof IError) {
      return left(result);
    }

    return right(void 0);
  }
}

export { ProcessValidAccountUseCase };
