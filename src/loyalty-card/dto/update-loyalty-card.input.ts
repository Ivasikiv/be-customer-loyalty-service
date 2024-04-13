import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { LoyaltyCardEntity } from '../entity/loyalty-card.entity';

@InputType()
export class UpdateLoyaltyCardInput extends PartialType(LoyaltyCardEntity) {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  LoyaltyUserID?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  LoyaltyCardTypeID?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  CardNumber?: string;

  @Field({ nullable: true })
  @IsOptional()
  CurrentBalance?: number;

  @Field({ nullable: true })
  @IsOptional()
  FirstUsage?: Date;

  @Field({ nullable: true })
  @IsOptional()
  LastUsage?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Status?: string;
}
