import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// 2. localhost:3000 접속! 오류뜨네.. 왜냐? controller에 'movies'는 /movies 로 만들어짐 즉 url의 엔트리포인트임
@Controller('movies')
export class MoviesController {
  // service와 연결해주기
  constructor(readonly moviesService: MoviesService) {}

  // 1. api 만들어보기
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
    // return 'this will return all movies';
  }

  // query에서 값 가져오기
  @Get('search')
  // 예시 get 메소드 http://localhost:3000/movies/search?year=11
  // searchingYear에는 11이 들어감
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie with a title : ${searchingYear}`;
  }

  // 동적 url 생성은 : 로
  @Get(':id')
  // useParams() 처럼 url을 가져올려면 우리가 nestjs에 요청을 해야함. => @Param(변수명) 'id'라는 파라메터를 id의 변수에 저장하고싶다.
  // get에 적힌 변수명과 param안의 변수명이 같아야함.
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
    // return `this will return one movieId: ${movieId}`;
  }

  @Post()
  // post요청으로 날라온 req.body를 보고싶다면 @Body()사용
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
    // return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.remove(movieId);
    // return `this will delete a movieId : ${movieId}`;
  }

  // update방식중 put은 모든 리소스를 업데이트함
  // patch는 부분적인 리소스를 업데이트함
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
