import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { OrderDetailEntity } from '../entity/order-detail.entity';

@InputType()
export class UpdateOrderDetailInput extends PartialType(OrderDetailEntity) {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  OrderID?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  AssortmentSegmentID?: number;

  @Field()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ItemName?: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  PromoCampaignID?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  Quantity?: number;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  Price?: number;
}
