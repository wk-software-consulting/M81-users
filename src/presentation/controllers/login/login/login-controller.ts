import { AddAccount } from '@app/domain/usecases/account/add-account';
import { AddAccountDecorator } from '@app/module/account/decorators/add-account.decorator';
import { AccountDTO } from '@app/presentation/dtos/account/account.dto';
import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

const ackErrors: string[] = ['E11000'];

@Controller('login')
export class LoginController {
  private logger = new Logger(LoginController.name);
  constructor(
    @AddAccountDecorator() private readonly addAccountService: AddAccount,
  ) {}

  @MessagePattern('add.account')
  async handle(
    @Payload() accountDTO: AccountDTO,
    @Ctx() ctx: RmqContext,
  ): Promise<void> {
    const channel = ctx.getChannelRef();
    const orginalMessage = ctx.getMessage();
    this.logger.log(`${JSON.stringify(accountDTO)}`);

    try {
      await Promise.all([
        channel.ack(orginalMessage),
        this.addAccountService.add(accountDTO),
      ]);
    } catch (e) {
      this.logger.log(`${JSON.stringify(e.message)}`);
      const filterAckError = ackErrors.filter((ackError) =>
        e.message.includes(ackError),
      );

      if (filterAckError.length) await channel.ack(orginalMessage);
    }
  }
}
