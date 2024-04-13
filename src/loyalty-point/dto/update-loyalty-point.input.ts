import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsDate } from 'class-validator';
import { LoyaltyPointEntity } from '../entity/loyalty-point.entity';

@InputType()
export class UpdateLoyaltyPointInput extends PartialType(LoyaltyPointEntity) {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  LoyaltyCardID?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  PolicyID?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  PointTransactionID?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  PointsAmount?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  AccrualDateTime?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  WithdrawalDateTime?: Date;
}
