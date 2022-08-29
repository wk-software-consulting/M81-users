import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import envFolderPath, { envs } from '@/shared/config/app';
import { typeormConfig } from '@/shared/config/typeorm/typeorm-config';

export const controllers = [];
export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
  TypeOrmModule.forRoot(typeormConfig.getTypeOrmConfig()[0]),
];
export const providers = [];
