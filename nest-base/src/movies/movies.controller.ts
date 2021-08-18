import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

// 2. localhost:3000 접속! 오류뜨네.. 왜냐? controller에 'movies'는 /movies 로 만들어짐 즉 url의 엔트리포인트임
@Controller('movies')
export class MoviesController {
  // 1. api 만들어보기
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  // 동적 url 생성은 : 로
  @Get('/:id')
  // useParams() 처럼 url을 가져올려면 우리가 nestjs에 요청을 해야함. => @Param(변수명) 'id'라는 파라메터를 id의 변수에 저장하고싶다.
  // get에 적힌 변수명과 param안의 변수명이 같아야함.
  getOne(@Param('id') movieId: string) {
    return `this will return one movieId: ${movieId}`;
  }

  @Post()
  create() {
    return `this will create a movie`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movieId : ${movieId}`;
  }

  // update방식중 put은 모든 리소스를 업데이트함
  // patch는 부분적인 리소스를 업데이트함
  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `this will patch a movieId : ${movieId}`;
  }
}
