import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreatePartnerInput {
  @Field()
  @IsString()
  Name: string;

  @Field()
  @IsString()
  Description: string;

  @Field()
  @IsString()
  ContactPerson: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  ContactEmail?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  ContactPhone?: string;
}
