import { Field, ObjectType } from '@nestjs/graphql';

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
}
