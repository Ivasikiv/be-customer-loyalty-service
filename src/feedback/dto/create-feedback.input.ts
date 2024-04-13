import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional, IsDate } from 'class-validator';

@InputType()
export class CreateFeedbackInput {
  @Field(() => Int)
  @IsInt()
  LoyaltyUserID: number;

  @Field(() => Int)
  @IsInt()
  PartnerLocationID: number;

  @Field(() => Int)
  @IsInt()
  OrderID: number;

  @Field(() => Int)
  @IsInt()
  FoodQuality: number;

  @Field(() => Int)
  @IsInt()
  ServiceQuality: number;

  @Field(() => Int)
  @IsInt()
  OverallImpression: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Comment?: string;

  @Field()
  FeedbackDate: Date;
}
