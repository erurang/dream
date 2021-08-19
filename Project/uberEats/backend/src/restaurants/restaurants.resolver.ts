import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant) // restaurant.entity.ts를 구현하는 리졸버라는뜻
export class RestaurantsResolver {
  @Query((returns) => Boolean) // graphql을 위한 예상리턴값
  isPizzaGood(): Boolean {
    //ts를 위한 예상리턴값
    return true;
  }

  @Query((returns) => Restaurant)
  myRestaurant() {
    return true;
  }
}
