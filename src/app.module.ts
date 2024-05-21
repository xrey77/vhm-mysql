import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';


@Module({
  // imports: [
  //   ServeStaticModule.forRoot({
  //     rootPath: join(__dirname, '..', 'client'),
  //     // exclude: ['/api/(.*)'],
  //   }),
  // ],
  // imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '../public'),
    //   // renderPath: '/public'
    // },
    // {
    // rootPath: join(__dirname, '..', '../client/dist'),
    // renderPath: '/dist'
    // }
  // ),
  // ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
