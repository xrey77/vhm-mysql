import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { NestExpressApplication } from '@nestjs/platform-express';

// import * as hbs from 'hbs';

import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', '../public'));  
  // app.setBaseViewsDir(join(__dirname, '..', '../../client/dist'));
  // hbs.registerPartials(join(__dirname, '..', 'views/partials'));
  // hbs.registerPartials(join(__dirname, '..', 'views/layout'));
  // hbs.registerPartials(join(__dirname, '..', 'views/page'));
  
  // app.setViewEngine('html');



  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter(),
  // );
  // app.useStaticAssets({
  //   root: join(__dirname, '..', 'public'),
  //   prefix: '/public/',
  // });

  // app.setViewEngine({
  //   engine: {
  //     handlebars: 'handlebars',
  //   },
  //   templates: join(__dirname, '..', 'views'),
  // });
  
  app.enableCors();

  await app.listen(3000);
}

bootstrap();
