import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional, IsNumber } from 'class-validator';
import { PartnerLocationEntity } from '../entity/partner-location.entity';

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

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  Latitude?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  Longitude?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  ContactPerson?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  ContactEmail?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  ContactPhone?: string;
}
