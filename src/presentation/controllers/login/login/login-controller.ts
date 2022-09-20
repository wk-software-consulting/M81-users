import { AccountModel } from '@app/domain/models/account/account';
import { AddAccount } from '@app/domain/usecases/account/add-account';
import { AddAccountDecorator } from '@app/module/account/decorators/add-account.decorator';
import { AccountDTO } from '@app/presentation/dtos/account/account.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(
    @AddAccountDecorator() private readonly addAccountService: AddAccount,
  ) {}

  @Post()
  async handle(@Body() accountDTO: AccountDTO): Promise<AccountModel> {
    return await this.addAccountService.add(accountDTO);
  }
}
