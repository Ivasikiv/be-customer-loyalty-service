import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';
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

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  Points?: number;
}
