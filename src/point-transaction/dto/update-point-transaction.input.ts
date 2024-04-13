import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';
import { PointTransactionEntity } from '../entity/point-transaction.entity';

@InputType()
export class UpdatePointTransactionInput extends PartialType(
  PointTransactionEntity,
) {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  OrderRecordID?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  LoyaltyCardID?: number;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  PointTransactionType?: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  PointsChange?: number;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  OrderDate?: Date;
}
