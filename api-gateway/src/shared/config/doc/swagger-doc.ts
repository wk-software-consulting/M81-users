import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const swaggerDoc = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('M81')
    .setVersion('0.0.1')
    .setContact(
      'Code Koller',
      'https://github.com/codekoller',
      '041codekoller@gmail.com',
    )
    .addServer('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};
