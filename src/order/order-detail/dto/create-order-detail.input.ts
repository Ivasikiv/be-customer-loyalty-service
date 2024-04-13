import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsInt, IsNumber } from 'class-validator';

@InputType()
export class CreateOrderDetailInput {
  @Field(() => Int)
  @IsInt()
  OrderID: number;

  @Field(() => Int)
  @IsInt()
  AssortmentSegmentID: number;

  @Field(() => Int)
  @IsInt()
  PromoCampaignID: number;

  @Field(() => Int)
  @IsInt()
  Quantity: number;

  @Field(() => Float)
  @IsNumber()
  Price: number;
}
