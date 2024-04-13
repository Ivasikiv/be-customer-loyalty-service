import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsInt, IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateAssortmentSegmentInput {
  @Field(() => Int)
  @IsInt()
  PartnerLocationID: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  AssortmentSegmentType: string;

  @Field(() => Float)
  @IsNumber()
  Price: number;

  @Field(() => Int)
  @IsInt()
  Points: number;
}
