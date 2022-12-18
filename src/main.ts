import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

//実際に基礎となるプラットフォームAPIにアクセスしたい場合を除き、型を指定する必要はない。
