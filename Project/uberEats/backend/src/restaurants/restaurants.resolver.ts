import { Query, Resolver } from '@nestjs/graphql';

@Resolver() // resolver를 생성하면 자동적으로 schema.gql파일이 생성됨
export class RestaurantsResolver {
  @Query((returns) => Boolean) // graphql을 위한 예상리턴값
  isPizzaGood(): Boolean {
    //ts를 위한 예상리턴값
    return true;
  }
}
