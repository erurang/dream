import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // 컨트롤러에서 쓰는게 아니라 여기서 함수를 풀어적어줌
  getHi(): string {
    return 'Hi Nest!';
  }
}
