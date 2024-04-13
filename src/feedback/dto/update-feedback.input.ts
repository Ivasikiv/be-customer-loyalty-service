import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional } from 'class-validator';
import { FeedbackEntity } from '../entity/feedback.entity';

@InputType()
export class UpdateFeedbackInput extends PartialType(FeedbackEntity) {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  LoyaltyUserID?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  PartnerLocationID?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  OrderID?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  FoodQuality?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  ServiceQuality?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  OverallImpression?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Comment?: string;

  @Field({ nullable: true })
  @IsOptional()
  FeedbackDate?: Date;
}
