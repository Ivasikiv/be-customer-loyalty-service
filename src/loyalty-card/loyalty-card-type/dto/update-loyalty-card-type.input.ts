import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';
import { LoyaltyCardTypeEntity } from '../entity/loyalty-card-type.entity';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Type, Transform } from 'class-transformer';

@InputType()
export class UpdateLoyaltyCardTypeInput extends PartialType(
  LoyaltyCardTypeEntity,
) {
  @Field(() => GraphQLDecimal, { nullable: true })
  @IsOptional()
  @Type(() => Object)
  @Transform(transformToDecimal)
  DiscountPercentage?: Decimal;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  TypeName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Description?: string;
}
