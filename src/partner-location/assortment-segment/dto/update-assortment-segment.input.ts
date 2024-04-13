import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { AssortmentSegmentEntity } from '../entity/assortment-segment.entity';

@InputType()
export class UpdateAssortmentSegmentInput extends PartialType(
  AssortmentSegmentEntity,
) {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  PartnerLocationID?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  AssortmentSegmentType?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  Price?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  Points?: number;
}
