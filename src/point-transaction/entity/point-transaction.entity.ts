import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { LoyaltyPoint } from './loyalty-point.entity';
// import { LoyaltyCard } from './loyalty-card.entity';
// import { OrderRecord } from './order-record.entity';

@ObjectType()
export class PointTransactionEntity {
  @Field(() => Int)
  PointTransactionID: number;

  @Field(() => Int)
  OrderRecordID: number;

  @Field(() => Int)
  LoyaltyCardID: number;

  @Field()
  PointTransactionType: string;

  @Field(() => Int)
  PointsChange: number;

  @Field()
  OrderDate: Date;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => LoyaltyPoint, { nullable: true })
  //   LoyaltyPoint?: LoyaltyPoint;

  //   @Field(() => LoyaltyCard)
  //   LoyaltyCard: LoyaltyCard;

  //   @Field(() => OrderRecord, { nullable: true })
  //   OrderRecord?: OrderRecord;
}
