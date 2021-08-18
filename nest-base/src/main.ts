import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// 터미널에 nest
// 여러 명령어가 존재함
// 여기서 사용해볼것은 generate
// nest g co 를 통해서 컨트롤러 파일을 자동생성함.
