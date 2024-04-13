import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, IsDate } from 'class-validator';

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
}
