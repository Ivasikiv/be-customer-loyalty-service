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
// import { OrderDetailCreateInput } from 'src/@generated/prisma-nestjs-graphql/order-detail/order-detail-create.input';

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

  // @Field(() => [OrderDetailCreateInput], { nullable: true })
  // @ValidateNested({ each: true })
  // @Type(() => OrderDetailCreateInput)
  // OrderDetails: OrderDetailCreateInput[];
}
