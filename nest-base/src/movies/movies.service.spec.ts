import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // 유닛테스트코드 만들기 // 문구는 상관없음 , 테스트하고싶은 함수가 2번째인자
  // test:watch
  it('should be 4', () => {
    expect(2 + 2).toEqual(4);
  });

  describe('getAll', () => {
    // movies.service.ts의 getAll 테스트해보기

    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return an movie', () => {
      service.create({
        title: 'testMovie',
        genres: ['test'],
        year: 2021,
      });

      const result = service.getOne(1);
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });

    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`movie 999 not found`);
      }
    });
  });

  describe('deleteOne', () => {
    it('delete a movie', () => {
      service.create({
        title: 'testMovie',
        genres: ['test'],
        year: 2021,
      });
      console.log(service.getAll());
      const allMovies = service.getAll();
      service.remove(1);

      const after = service.getAll();

      expect(after.length).toEqual(allMovies.length - 1);
    });

    it('should return 404', () => {
      try {
        service.remove(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;

      service.create({
        title: 'testMovie',
        genres: ['test'],
        year: 2021,
      });

      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'testMovie',
        genres: ['test'],
        year: 2021,
      });

      service.update(1, { title: 'updated test' });

      const movie = service.getOne(1);
      expect(movie.title).toEqual('updated test');
    });

    it('should return 404', () => {
      try {
        service.update(999, { title: 'zzzz' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
