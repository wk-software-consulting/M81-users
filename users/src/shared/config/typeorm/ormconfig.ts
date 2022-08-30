import fs = require('fs');
import { typeormConfig } from './typeorm-config';

const [migrations] = typeormConfig.getTypeOrmConfig();

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(
    [
      {
        ...migrations,
        entities: [`src/modules/**/entities/**.entity{.ts,.js}`],
        migrations: [`src/infra/typeorm/migrations/*{.ts,.js}`],
      },
    ],
    null,
    2,
  ),
);
