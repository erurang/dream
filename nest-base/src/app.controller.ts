import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller는 express의 라우터 역할을 담당함 (url을 가져오는 역할만!!)
// app.get app.post.. 이렇게 사용한걸 @Get @Post 형식으로 쓰게해줌
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // 자 그런데 여기서 의문이생긴다. 아래함수 @Get('/hello')에서 단순히 return 'hello everyone'; 만 리턴해도
    // localhost:3000에선 'hello everyone' 이 나타나는데.. 왜 여기선 this.appService.getHello() 라고 표현해준걸까?
    // 컨트롤러에서는 단순히 url을 가져와서 함수를 실행시키는 역할만 해준다.
    // 나머지 상세사항은 app.service에서 구현한다.
    return this.appService.getHello();
  }

  // hello가 주소인 라우터 하나 만들어보기
  // 주의할점 데코레이터와 함수는 같이 붙어있어야한다.
  @Get('/hello')
  sayHello(): string {
    // 그래서 이부분도 서비스에서 함수를 가져오는것으로 변경
    // return 'hello everyone';
    return this.appService.getHi();
  }
}
