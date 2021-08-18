import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  // url을 가져오고 함수를 실행함 express의 라우터역할임
  controllers: [AppController],
  //
  providers: [AppService],
})
export class AppModule {}
