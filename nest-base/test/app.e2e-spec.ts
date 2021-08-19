import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  // beforeEach는 한 테스트가 일어날때마다 매번 모듈을 생성함
  // 앱을 새로 만들고싶진않음 왜냐 아래의 우리 post에서 만든걸 사용하고싶으니까
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  // / 로 접속하면
  it('/ (GET)', () => {
    // 서버에 요청해서
    return (
      request(app.getHttpServer())
        // / 받아오고
        .get('/')
        // 200 상태코드를 예상하고
        .expect(200)
        // 'hello world' 를 예상한다
        .expect('this is home')
    );
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });
    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'test', year: 2021, genres: ['test'] })
        .expect(201);
    });

    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  // it('/movies (GET)', () => {
  //   return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
  // });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer()).get('/movies/999').expect(404);
    });
    it.todo('DELETE');
    it.todo('PATCH');
  });
});
