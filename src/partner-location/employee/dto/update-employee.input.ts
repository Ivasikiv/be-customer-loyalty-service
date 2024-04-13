import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional } from 'class-validator';
import { EmployeeEntity } from '../entity/employee.entity';

@InputType()
export class UpdateEmployeeInput extends PartialType(EmployeeEntity) {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  PartnerLocationID?: number;

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
  @IsString()
  Position?: string;

  @Field({ nullable: true })
  @IsOptional()
  BirthDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  EmploymentStartDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  EmploymentEndDate?: Date;
}
