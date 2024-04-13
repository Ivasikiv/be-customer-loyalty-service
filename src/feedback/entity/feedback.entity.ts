import { Field, Int, ObjectType } from '@nestjs/graphql';

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
}
