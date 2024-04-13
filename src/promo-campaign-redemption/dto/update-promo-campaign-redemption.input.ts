import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsInt, IsDate, IsOptional } from 'class-validator';
import { PromoCampaignRedemptionEntity } from '../entity/promo-campaign-redemption.entity';

@InputType()
export class UpdatePromoCampaignRedemptionInput extends PartialType(
  PromoCampaignRedemptionEntity,
) {
  @Field({ nullable: true })
  @IsInt()
  @IsOptional()
  PromoCampaignID?: number;

  @Field({ nullable: true })
  @IsInt()
  @IsOptional()
  LoyaltyCardID?: number;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  RedeemedDate?: Date;
}
