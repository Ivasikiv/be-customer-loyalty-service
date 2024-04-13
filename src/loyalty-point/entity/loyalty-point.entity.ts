import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoyaltyPointEntity {
  @Field(() => Int)
  LoyaltyPointID: number;

  @Field(() => Int)
  LoyaltyCardID: number;

  @Field(() => Int)
  PointTransactionID: number;

  @Field(() => Int)
  PolicyID: number;

  @Field(() => Int)
  PointsAmount: number;

  @Field()
  AccrualDateTime: Date;

  @Field({ nullable: true })
  WithdrawalDateTime?: Date;
}
