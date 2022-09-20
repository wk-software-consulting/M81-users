import {
  AccountModel,
  AccountSchema,
} from '@app/domain/models/account/account';
import { AccountMongoRepository } from '@app/infra/db/mongodb/account/account-mongo-repository';
import { LoginController } from '@app/presentation/controllers/login/login/login-controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AddAccountProvider } from './providers/add-account.provider';

export const imports = [
  MongooseModule.forFeature([
    {
      name: AccountModel.name,
      schema: AccountSchema,
    },
  ]),
];
export const controllers = [LoginController];

export const providers = [AddAccountProvider, AccountMongoRepository];
