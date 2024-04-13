import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoyaltyCardTypeEntity {
  @Field(() => Int)
  LoyaltyCardTypeID: number;

  @Field(() => Int)
  DiscountPercentage: number;

  @Field()
  TypeName: string;

  @Field()
  Description: string;

  @Field()
  CreateDate: Date;

  @Field({ nullable: true })
  UpdateDate?: Date;
}
