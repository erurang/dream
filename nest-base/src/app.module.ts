import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  // nest g co 로 컨트롤러 파일을 자동생성했는데 여기에 자동추가된걸 볼수있음
  controllers: [MoviesController],
  // nest g s 로 자동생성됨
  providers: [MoviesService],
})
export class AppModule {}
