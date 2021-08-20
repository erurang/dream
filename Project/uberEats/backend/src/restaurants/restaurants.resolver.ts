import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver() // restaurant.entity.ts를 구현하는 리졸버라는뜻
export class RestaurantsResolver {
  @Query(() => [Restaurant]) // entity의 restaurant가 typedef가 되어..
  // 인자요청하기
  myRestaurants(@Args('name') name: string): Restaurant[] {
    return [];
  }
}
