import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateEmployeeInput {
  @Field(() => Int)
  @IsInt()
  PartnerLocationID: number;

  @Field()
  @IsString()
  FirstName: string;

  @Field()
  @IsString()
  LastName: string;

  @Field()
  @IsString()
  Position: string;

  @Field({ nullable: true })
  @IsOptional()
  BirthDate?: Date;

  @Field()
  EmploymentStartDate: Date;

  @Field({ nullable: true })
  @IsOptional()
  EmploymentEndDate?: Date;
}
