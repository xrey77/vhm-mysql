import { Controller, Get, Redirect, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  
  indexPage(@Req() req: Request, @Res() res: Response) {
    console.log(__dirname)
    // res.sendFile(join(__dirname, '..', '/index.html'));    
  }
  // @Redirect('index')
  // @Render('index')
  // root() {
  //   return {message: 'test'}
  // }  


}
