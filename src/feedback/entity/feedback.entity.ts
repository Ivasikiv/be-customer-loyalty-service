import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { LoyaltyUser } from './loyalty-user.entity';
// import { OrderRecord } from './order-record.entity';
// import { PartnerLocation } from './partner-location.entity';

@ObjectType()
export class FeedbackEntity {
  @Field(() => Int)
  FeedbackID: number;

  @Field(() => Int)
  LoyaltyUserID: number;

  @Field(() => Int)
  PartnerLocationID: number;

  @Field(() => Int)
  OrderID: number;

  @Field(() => Int)
  FoodQuality: number;

  @Field(() => Int)
  ServiceQuality: number;

  @Field(() => Int)
  OverallImpression: number;

  @Field({ nullable: true })
  Comment?: string;

  @Field()
  FeedbackDate: Date;

  @Field()
  CreateDate: Date;

  @Field({ nullable: true })
  UpdateDate?: Date;

  //   @Field(() => LoyaltyUser)
  //   LoyaltyUser: LoyaltyUser;

  //   @Field(() => OrderRecord)
  //   OrderRecord: OrderRecord;

  //   @Field(() => PartnerLocation)
  //   PartnerLocation: PartnerLocation;
}
