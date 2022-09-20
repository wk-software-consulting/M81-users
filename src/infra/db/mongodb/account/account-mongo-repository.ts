import { AddAccountRepository } from '@app/data/protocols/db/account';
import { AccountModel } from '@app/domain/models/account/account';
import { AddAccountParams } from '@app/domain/usecases/account/add-account';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccountMongoRepository implements AddAccountRepository {
  constructor(
    @InjectModel(AccountModel.name)
    private readonly mongoHelper: Model<AccountModel>,
  ) {}

  async add(inputData: AddAccountParams): Promise<AccountModel> {
    const accountCreated = new this.mongoHelper(inputData);
    return await accountCreated.save();
  }
}
