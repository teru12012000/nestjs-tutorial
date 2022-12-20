import { IsString } from 'class-validator';
//import { IsNumber } from 'class-validator/types/decorator/decorators';

export class CreateCatDto {
  @IsString()
  name: string;
  //@IsNumber()
  age: number;
  @IsString()
  breed: string;
}
