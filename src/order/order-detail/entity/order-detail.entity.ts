import { Field, ObjectType } from '@nestjs/graphql';
// import { AssortmentSegment } from './assortment-segment.entity';
// import { OrderRecord } from './order-record.entity';
// import { PromoCampaign } from './promo-campaign.entity';

@ObjectType()
export class OrderDetailEntity {
  @Field()
  OrderDetailID: number;

  @Field()
  OrderID: number;

  @Field()
  AssortmentSegmentID: number;

  @Field()
  PromoCampaignID: number;

  @Field()
  Quantity: number;

  @Field()
  Price: number;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => AssortmentSegment)
  //   AssortmentSegment: AssortmentSegment;

  //   @Field(() => OrderRecord)
  //   OrderRecord: OrderRecord;

  //   @Field(() => PromoCampaign)
  //   PromoCampaign: PromoCampaign;
}
