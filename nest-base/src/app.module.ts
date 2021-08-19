import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  // app.module은 하나의 컨트롤러와 하나의 프로바이더만 가지고있어야한다.
  // 즉 지금은 movies 하나를 만들어서 썻지만. 만약에 다른걸 만들게되면..? 이렇게 적용할수없다.
  // 그래서 MoviesService MoviesController를 movie라는 모듈로 만들어서 import시켜야한다.
  // nest g mo => imports 자동적용
  // 그럼 컨트롤러랑 프로바이더는 언제쓰지..? nest g co
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
