import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEmail, IsOptional } from 'class-validator';

@InputType()
export class CreateLoyaltyUserInput {
  @Field()
  @IsString()
  FirstName: string;

  @Field()
  @IsString()
  LastName: string;

  @Field()
  @IsEmail()
  Email: string;

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
