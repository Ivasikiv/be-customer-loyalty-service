import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAssortmentSegmentInput {
  @Field(() => Int)
  @IsInt()
  PartnerLocationID: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  AssortmentSegmentType: string;

  @Field(() => Int)
  @IsInt()
  Points: number;
}
