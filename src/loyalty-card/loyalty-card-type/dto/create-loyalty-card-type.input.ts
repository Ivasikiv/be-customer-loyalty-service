import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsDecimal } from 'class-validator';

@InputType()
export class CreateLoyaltyCardTypeInput {
  @Field()
  @IsDecimal()
  DiscountPercentage: number;

  @Field()
  @IsString()
  TypeName: string;

  @Field()
  @IsString()
  Description: string;
}
