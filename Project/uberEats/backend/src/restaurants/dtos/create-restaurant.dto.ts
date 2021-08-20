import { ArgsType, Field } from '@nestjs/graphql';

// @InputType() // 차이생각하기
@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;
  @Field(() => Boolean)
  isVegan: boolean;
  @Field(() => String)
  address: string;
  @Field(() => String)
  ownerName: string;
}
