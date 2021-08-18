import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // AppModule은 리액트 div.root처럼 루트모듈임.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
