import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsDate } from 'class-validator';

@InputType()
export class CreatePromoCampaignRedemptionInput {
  @Field()
  @IsInt()
  PromoCampaignID: number;

  @Field()
  @IsInt()
  LoyaltyCardID: number;

  @Field()
  @IsDate()
  RedeemedDate: Date;
}
