import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver() // restaurant.entity.ts를 구현하는 리졸버라는뜻
export class RestaurantsResolver {
  @Query(() => [Restaurant]) // entity의 restaurant가 typedef가 되어..
  // 인자요청하기
  myRestaurants(@Args('name') name: string): Restaurant[] {
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(
    // 이렇게 인자를 하나하나 주는방법도있지만.. DTO를 만드는 방법도 있음.
    // @Args('name') name: string,
    // @Args('isVegan') isVegan: string,
    // @Args('address') address: string,
    // @Args('ownerName') ownerName: string,
    // 하지만 이건 dto에서 inputType()으로 지정했을떈데
    // @Args('createRestaurantDto') createRestaurantInput: CreateRestaurantDto,
    // 대신 위에처럼 만들면 graphql에서 접근을 이렇게해야함
    // mutation {
    //   createRestaurant(createRestaurantDto:{name:"zz",isVegan:true,ownerName:"zz",address:"zz"})
    // }
    // argstype()으로 지정을 하면 저렇게 할 필요없이 기존처럼 개별 args를 접근가능함
    @Args() createRestaurantDto: CreateRestaurantDto,
  ): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
