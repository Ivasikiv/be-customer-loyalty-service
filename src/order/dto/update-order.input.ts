import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, IsDate } from 'class-validator';
import { OrderRecordEntity } from '../entity/order.entity';

@InputType()
export class UpdateOrderRecordInput extends PartialType(OrderRecordEntity) {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  LoyaltyCardID?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  LocationID?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  OrderTypeID?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  SellerID?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  PaymentMethod?: string;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  OrderDateTime?: Date;
}
