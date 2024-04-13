import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString, IsEmail } from 'class-validator';
import { LoyaltyUserEntity } from '../entities/loyalty-user.entity';

@InputType()
export class UpdateLoyaltyUserInput extends PartialType(LoyaltyUserEntity) {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  FirstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  LastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  Email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Address?: string;

  @Field({ nullable: true })
  @IsOptional()
  BirthDate?: Date;
}
