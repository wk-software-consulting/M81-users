import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ModelNotFoundException } from './shared/filters/model-not-found.exception.filter';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { swaggerDoc } from './shared/config/doc/swagger-doc';

async function bootstrap(): Promise<void> {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api');

  swaggerDoc(app);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new ModelNotFoundException(), new HttpExceptionFilter());

  const config = app.get(ConfigService);
  const port = config.get('port');

  await app.listen(port, () => logger.log(`Server running in port: ${port}`));
}
bootstrap();
