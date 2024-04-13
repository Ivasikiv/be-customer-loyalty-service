import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';
import { PartnerEntity } from '../entity/partner.entity';

@InputType()
export class UpdatePartnerInput extends PartialType(PartnerEntity) {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Description?: string;

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
