import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsInt,
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

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
  @IsOptional()
  PromoCampaignID?: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  ItemName: string;

  @Field(() => Int)
  @IsInt()
  Quantity: number;

  @Field(() => Float)
  @IsNumber()
  Price: number;
}
