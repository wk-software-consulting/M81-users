import { AccountModel } from '@app/domain/models/account/account';
import { AddAccountParams } from '@app/domain/usecases/account/add-account';

export interface AddAccountRepository {
  add(data: AddAccountParams): Promise<AccountModel>;
}
