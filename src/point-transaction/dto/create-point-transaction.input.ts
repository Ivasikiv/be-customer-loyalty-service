import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsDate, IsString } from 'class-validator';

@InputType()
export class CreatePointTransactionInput {
  @Field(() => Int)
  @IsInt()
  OrderRecordID: number;

  @Field(() => Int)
  @IsInt()
  LoyaltyCardID: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  PointTransactionType: string;

  @Field(() => Int)
  @IsInt()
  PointsChange: number;

  @Field()
  @IsDate()
  OrderDate: Date;
}
