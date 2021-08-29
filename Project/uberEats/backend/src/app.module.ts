import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    GraphQLModule.forRoot({
      // 우리가 @resolvers로 만든 리졸버를 보고 자동적으로 그래프큐엘 스키마를 생성해줌..
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    RestaurantsModule,
    TypeOrmModule.forRoot({
      // typeorm과 연결하기위해

      type: "postgres",
      host: "localhost",
      port: 5432,
      username: 'erurang',
      // password : localhost일경우는 생략가능
      database: 'uber-eats',
      // typeorm이 db로 연결할때 db를 모듈의 상태로 마이그레이션함
      synchronize: true,
      // 데이터베이스 오류 로깅
      logging: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
