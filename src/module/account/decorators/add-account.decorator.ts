import { Inject } from '@nestjs/common';
import { ADD_ACCOUNT_PROVIDER_ID } from '../providers/add-account.provider';

export const AddAccountDecorator = () => Inject(ADD_ACCOUNT_PROVIDER_ID);
