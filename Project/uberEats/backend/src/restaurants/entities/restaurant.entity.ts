import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((type) => String) // => string!
  name: string;

  @Field((type) => Boolean, { nullable: true }) //nullable은 !가 빠짐 필수가 아니라는뜻
  isGood?: Boolean;
}
