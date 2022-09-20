import { Module } from '@nestjs/common';
import { controllers, imports, providers } from './app.settings';

@Module({
  controllers,
  imports,
  providers,
})
export class AppModule {}
