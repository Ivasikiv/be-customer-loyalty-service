import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsDate, IsOptional } from 'class-validator';
import { PromoCampaignEntity } from '../entity/promo-campaign.entity';

@InputType()
export class UpdatePromoCampaignInput extends PartialType(PromoCampaignEntity) {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  PromoCampaignName?: string;

  @Field({ nullable: true })
  @IsOptional()
  PartnerID?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  Description?: string;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  StartDate?: Date;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  EndDate?: Date;
}
