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

@Controller('account')
export class AccountController {
  private logger = new Logger(AccountController.name);
  constructor(
    @AddAccountDecorator() private readonly addAccountService: AddAccount,
  ) {}

  @MessagePattern('add.account')
  async handleAddAccount(
    @Payload() accountDTO: AccountDTO,
    @Ctx() ctx: RmqContext,
  ): Promise<void> {
    const channel = ctx.getChannelRef();
    const originalMessage = ctx.getMessage();

    this.logger.log(`${JSON.stringify(accountDTO)}`);

    try {
      await Promise.all([
        this.addAccountService.add(accountDTO),
        channel.ack(originalMessage),
      ]);
    } catch (e) {
      this.logger.log(`${JSON.stringify(e)}`);
      const filterAckError = ackErrors.filter((ackError) =>
        e.message.includes(ackError),
      );

      if (filterAckError.length) await channel.ack(originalMessage);
    }
  }
}
