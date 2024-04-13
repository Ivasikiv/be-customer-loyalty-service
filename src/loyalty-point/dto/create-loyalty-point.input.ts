import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@InputType()
export class CreateLoyaltyPointInput {
  @Field(() => Int)
  @IsInt()
  LoyaltyCardID: number;

  @Field(() => Int)
  @IsInt()
  PointTransactionID: number;

  @Field(() => Int)
  @IsInt()
  PolicyID: number;

  @Field(() => Int)
  @IsInt()
  PointsAmount: number;

  @Field(() => Date)
  AccrualDateTime: Date;

  @Field({ nullable: true })
  @IsOptional()
  WithdrawalDateTime?: Date;
}
