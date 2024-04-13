import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { PartnerLocation } from './partner-location.entity';
// import { OrderRecord } from './order-record.entity';

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

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => PartnerLocation)
  //   PartnerLocation: PartnerLocation;

  //   @Field(() => [OrderRecord])
  //   OrderRecord: OrderRecord[];
}
