import { Field, Int, ObjectType } from '@nestjs/graphql';
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
}
