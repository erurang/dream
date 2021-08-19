import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // middleware같음
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist만 있을경우엔 우리가 post로 인풋을 받을때
      // 정해진 타입을 벗어난값은 아예 받지않고 저장함
      whitelist: true,
      // forbid를 하면 타입에서 벗어난값은  "property hacked should not exist" 결과가 리턴되고 저장안댐
      forbidNonWhitelisted: true,
      // transfrom을 통해서 우리가 entity에 지정한 타입을 받아올수있도록 자동변환시켜줌
      // 예를들어 param(:id)를 가져오는데 가져올떄는 string이지만 number로 자동변환되도록해줌
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

// 터미널에 nest
// 여러 명령어가 존재함
// 여기서 사용해볼것은 generate
// nest g co 를 통해서 컨트롤러 파일을 자동생성함.
