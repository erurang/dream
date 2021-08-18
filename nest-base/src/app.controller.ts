import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller는 express의 라우터 역할을 담당함
// app.get app.post.. 이렇게 사용한걸 @Get @Post 형식으로 쓰게해줌
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // hello가 주소인 라우터 하나 만들어보기
  // 주의할점 데코레이터와 함수는 같이 붙어있어야한다.
  @Get('/hello')
  sayHello(): string {
    return 'hello everyone';
  }
}
