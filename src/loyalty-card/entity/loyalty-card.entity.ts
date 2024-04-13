import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class LoyaltyCardEntity {
  @Field(() => Int)
  LoyaltyCardID: number;

  @Field(() => Int)
  LoyaltyUserID: number;

  @Field(() => Int)
  LoyaltyCardTypeID: number;

  @Field()
  CardNumber: string;

  @Field(() => Int)
  CurrentBalance: number;

  @Field({ nullable: true })
  FirstUsage?: Date;

  @Field({ nullable: true })
  LastUsage?: Date;

  @Field()
  Status: string;
}
