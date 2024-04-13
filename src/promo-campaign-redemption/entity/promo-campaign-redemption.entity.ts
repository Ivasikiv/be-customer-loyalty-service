import { Field, ObjectType } from '@nestjs/graphql';
// import { LoyaltyCard } from './loyalty-card.entity';
// import { PromoCampaign } from './promo-campaign.entity';

@ObjectType()
export class PromoCampaignRedemptionEntity {
  @Field()
  RedemptionID: number;

  @Field()
  PromoCampaignID: number;

  @Field()
  LoyaltyCardID: number;

  @Field()
  RedeemedDate: Date;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => LoyaltyCard)
  //   LoyaltyCard: LoyaltyCard;

  //   @Field(() => PromoCampaign)
  //   PromoCampaign: PromoCampaign;
}
