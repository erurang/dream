// 로직을 관리하는 서비스
// nest g s 로 자동생성됨
// 가짜 데이터베이스가 존재한다는 가정하에 이렇게 만듬.
import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  // controller에 만든것들을 정의

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);

    // 예외처리
    if (!movie) throw new NotFoundException(`movie ${id} not found`);
    return this.movies.find((movie) => movie.id === +id);
  }

  remove(id: string): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
