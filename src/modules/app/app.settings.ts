import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import envFolderPath, { envs } from '@/shared/config/app';

export const controllers = [];
export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (cfService: ConfigService) => ({
      type: 'postgres',
      host: cfService.get('db.host'),
      port: cfService.get('db.port'),
      username: cfService.get('db.user'),
      password: cfService.get('db.pass'),
      database: cfService.get('db.database'),
      entities: ['./src/modules/**/entities/*.entity.ts'],
      migrations: ['./src/modules/typeorm/migrations/*.ts'],
      migrationsTableName: cfService.get('migrations'),
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
];
export const providers = [];
