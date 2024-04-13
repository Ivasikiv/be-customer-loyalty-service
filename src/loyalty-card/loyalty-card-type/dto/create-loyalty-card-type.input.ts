import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Type, Transform } from 'class-transformer';

@InputType()
export class CreateLoyaltyCardTypeInput {
  @Field(() => GraphQLDecimal)
  @Type(() => Object)
  @Transform(transformToDecimal)
  DiscountPercentage: Decimal;

  @Field()
  @IsString()
  TypeName: string;

  @Field()
  @IsString()
  Description: string;
}
