import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsInt,
  IsOptional,
  IsString,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderDetailInput } from '../order-detail/dto/create-order-detail.input';

@InputType()
export class CreateOrderRecordInput {
  @Field(() => Int)
  @IsInt()
  LoyaltyCardID: number;

  @Field(() => Int)
  @IsInt()
  LocationID: number;

  @Field(() => Int)
  @IsInt()
  OrderTypeID: number;

  @Field(() => Int)
  @IsInt()
  SellerID: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  PaymentMethod?: string;

  @Field()
  @IsDate()
  OrderDateTime: Date;

  @Field(() => [CreateOrderDetailInput], { nullable: true })
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDetailInput)
  OrderDetails: CreateOrderDetailInput[];
}
