import { Module } from '@nestjs/common';
import { controllers, imports, providers } from './account.settings';

@Module({
  controllers,
  imports,
  providers,
})
export class AccountModule {}
