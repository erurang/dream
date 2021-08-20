import { ArgsType, Field } from '@nestjs/graphql';

import { IsString, Length } from 'class-validator';
// @InputType() // 차이생각하기
@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(() => Boolean)
  isVegan: boolean;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  ownerName: string;
}
