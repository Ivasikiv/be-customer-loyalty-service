import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EmployeeEntity {
  @Field(() => Int)
  EmployeeID: number;

  @Field(() => Int)
  PartnerLocationID: number;

  @Field()
  FirstName: string;

  @Field()
  LastName: string;

  @Field()
  Position: string;

  @Field({ nullable: true })
  BirthDate?: Date;

  @Field()
  EmploymentStartDate: Date;

  @Field({ nullable: true })
  EmploymentEndDate?: Date;
}
