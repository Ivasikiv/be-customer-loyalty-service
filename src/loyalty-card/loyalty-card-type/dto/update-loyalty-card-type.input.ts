import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsDecimal, IsOptional } from 'class-validator';
import { LoyaltyCardTypeEntity } from '../entity/loyalty-card-type.entity';

@InputType()
export class UpdateLoyaltyCardTypeInput extends PartialType(
  LoyaltyCardTypeEntity,
) {
  @Field({ nullable: true })
  @IsOptional()
  @IsDecimal()
  DiscountPercentage?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  TypeName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Description?: string;
}
