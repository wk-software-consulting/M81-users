import { AddAccountService } from '@app/presentation/services/account/add-account.service';
import { Provider } from '@nestjs/common';

export const ADD_ACCOUNT_PROVIDER_ID = 'ADD_ACCOUNT_PROVIDER_ID';

export const AddAccountProvider: Provider<AddAccountService> = {
  provide: ADD_ACCOUNT_PROVIDER_ID,
  useClass: AddAccountService,
};
