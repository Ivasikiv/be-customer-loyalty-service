import { Field, ObjectType } from '@nestjs/graphql';
// import { OrderDetail } from './order-detail.entity';
// import { PromoCampaignRedemption } from './promo-campaign-redemption.entity';

@ObjectType()
export class CreatePromoCampaignEntity {
  @Field()
  PromoCampaignID: number;

  @Field()
  PromoCampaignName: string;

  @Field()
  Description: string;

  @Field()
  StartDate: Date;

  @Field()
  EndDate: Date;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => [OrderDetail], { nullable: true })
  //   OrderDetail?: OrderDetail[];

  //   @Field(() => [PromoCampaignRedemption], { nullable: true })
  //   PromoCampaignRedemption?: PromoCampaignRedemption[];
}
