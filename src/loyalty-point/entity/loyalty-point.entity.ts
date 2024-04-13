import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { LoyaltyCard } from './loyalty-card.entity';
// import { PointTransaction } from './point-transaction.entity';
// import { PointExpiryPolicy } from './point-expiry-policy.entity';

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

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => LoyaltyCard)
  //   LoyaltyCard: LoyaltyCard;

  //   @Field(() => PointTransaction, { nullable: true })
  //   PointTransaction?: PointTransaction;

  //   @Field(() => PointExpiryPolicy)
  //   PointExpiryPolicy: PointExpiryPolicy;
}
