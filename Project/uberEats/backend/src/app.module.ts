import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule } from "@nestjs/config"
import * as Joi from "joi"

@Module({
  imports: [
    ConfigModule.forRoot({
      // 우리 app이 어디서나 접근가능해?
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? ".env.dev" : ".env.test",
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      // joi를 이용한 env파일 유효성확인
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_DATABASE: Joi.string().required()

      })
    }),
    GraphQLModule.forRoot({
      // 우리가 @resolvers로 만든 리졸버를 보고 자동적으로 그래프큐엘 스키마를 생성해줌..
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      // typeorm과 연결하기위해
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      // password : localhost일경우는 생략가능
      database: process.env.DB_DATABASE,
      // typeorm이 db로 연결할때 db를 모듈의 상태로 마이그레이션함
      synchronize: true,
      // 데이터베이스 오류 로깅
      logging: true
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
