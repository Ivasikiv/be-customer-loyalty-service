import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional } from 'class-validator';
import { PartnerLocationEntity } from '../entity/partner-location.entity';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Type, Transform } from 'class-transformer';

@InputType()
export class UpdatePartnerLocationInput extends PartialType(
  PartnerLocationEntity,
) {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  PartnerID?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  LocationName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Address?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  City?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  State?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  ZipCode?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Country?: string;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  @IsOptional()
  Latitude?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  @IsOptional()
  Longitude?: Decimal;
}
