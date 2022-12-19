import {
  Controller,
  Get,
  Post,
  //Req,
  //HttpCode,
  //Header,
  //Redirect,
} from '@nestjs/common';
//import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post('add')
  //@HttpCode(201)
  //@Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }
  @Get('find')
  //@Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action returns all cats';
  }
}
