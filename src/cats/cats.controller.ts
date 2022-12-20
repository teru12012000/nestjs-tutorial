import {
  Body,
  Controller,
  Get,
  //Param,
  Post,
  //Query,
  //Req,
  //HttpCode,
  //Header,
  //Redirect,
} from '@nestjs/common';
import { Cats } from './interfaces/cats.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
//import { Request } from 'express';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }
  @Get()
  async findAll(): Promise<Cats[]> {
    return this.catsService.findAll();
  }
  //@HttpCode(201)
  //@Header('Cache-Control', 'none')
  //create(@Body() CreateCatDto: CreateCatDto): string {
  //  return 'This action adds a new cat';
  //}
  //@Get('docs')
  //@Redirect('https://docs.nestjs.com', 302)
  //findAll(): string {
  //  return 'This action returns all cats';
  //}
  //getDocs(@Query('version') version) {
  //  if (version && version === '5') {
  //    return { url: 'https://docs.nestjs.com/v5/' };
  //  }
  //}
  /*@Get(':id')
  findOne(@Param('id') id): string {
    //paramsのメソッドを複数使うときは@Paramsの()に何も書かない方がいいかも？
    return `This action returns a #${id} cat`;
  }*/
}
