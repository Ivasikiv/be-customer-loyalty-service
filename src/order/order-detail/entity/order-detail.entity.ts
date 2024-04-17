import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderDetailEntity {
  @Field()
  OrderDetailID: number;

  @Field()
  OrderID: number;

  @Field()
  AssortmentSegmentID: number;

  @Field()
  ItemName: string;

  @Field()
  PromoCampaignID: number;

  @Field()
  Quantity: number;

  @Field()
  Price: number;
}
