import { AccountModel } from '@app/domain/models/account/account';

export type AddAccountParams = Omit<
  AccountModel,
  '_id' | 'createdAt' | 'updatedAt'
>;

export interface AddAccount {
  add(account: AddAccountParams): Promise<AccountModel>;
}
